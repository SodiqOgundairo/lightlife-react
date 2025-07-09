<?php
header('Content-Type: application/json');

require_once 'db_connect.php'; // Establishes $conn
require_once 'setup_table.php'; // Ensures table 'dld_entries' exists
require_once 'cloudinary_helper.php'; // Include Cloudinary helper

$response = ['success' => false, 'message' => '', 'data' => null, 'upload_error' => null];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Form data will be 'multipart/form-data' if a new image is uploaded.

    $id = $_POST['id'] ?? null;
    $title = $_POST['title'] ?? null;
    $entry_date = $_POST['date'] ?? null;

    // Initialize $image_url with the existing value from the form (if sent)
    // This allows clearing the image or keeping the old one if no new file is uploaded.
    $image_url = $_POST['imageUrl'] ?? null; // Frontend should send existing imageUrl

    $memory_verse_text = $_POST['memoryVerseText'] ?? null;
    $memory_verse_reference = $_POST['memoryVerseRef'] ?? null;
    $study_bible_reference = $_POST['studyBibleRef'] ?? null;
    $devotional_text = $_POST['devotionalText'] ?? null;
    $prayer = $_POST['prayer'] ?? null;
    $bible_reading_plan_text = $_POST['bibleReadingPlan'] ?? null;

    // Basic Validation
    if (empty($id) || !filter_var($id, FILTER_VALIDATE_INT)) {
        $response['message'] = 'Valid Entry ID is required.';
        echo json_encode($response);
        exit;
    }
    // Other field validations (title, date, devotional_text) are important too.
    if (empty($title)) { $response['message'] = 'Title is required.'; echo json_encode($response); exit; }
    if (empty($entry_date)) { $response['message'] = 'Date is required.'; echo json_encode($response); exit; }
    if (empty($devotional_text)) { $response['message'] = 'Devotional text is required.'; echo json_encode($response); exit; }

    // --- Cloudinary Image Upload Handling for Update ---
    // Frontend will send a new image file under 'newImageFile' (or similar)
    if (isset($_FILES['newImageFile']) && $_FILES['newImageFile']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['newImageFile']['tmp_name'];

        // Optional: Before uploading new, delete old one from Cloudinary if $image_url (old one) exists.
        // This requires fetching current $image_url from DB, parsing public_id, and calling delete.
        // For now, we are not deleting the old image automatically to keep it simpler.

        $uploadResult = uploadToCloudinaryViaCurl($fileTmpPath);

        if ($uploadResult['success']) {
            $image_url = $uploadResult['url']; // Update $image_url with the new Cloudinary URL
        } else {
            $response['upload_error'] = "Cloudinary upload failed for new image: " . ($uploadResult['error'] ?? 'Unknown error');
            // If new upload fails, $image_url will retain the value from $_POST['imageUrl'] (the old URL or empty if cleared by user)
            // The update will proceed with this $image_url.
        }
    } elseif (isset($_FILES['newImageFile']) && $_FILES['newImageFile']['error'] !== UPLOAD_ERR_NO_FILE) {
        $response['upload_error'] = 'New image file upload error code: ' . $_FILES['newImageFile']['error'];
    }
    // If $_POST['imageUrl'] was empty (user wants to remove image), and no new file, $image_url will be empty/null.

    $stmt = $conn->prepare("UPDATE dld_entries SET
        title = ?, entry_date = ?, image_url = ?,
        memory_verse_text = ?, memory_verse_reference = ?, study_bible_reference = ?,
        devotional_text = ?, prayer = ?, bible_reading_plan_text = ?
        WHERE id = ?");

    if ($stmt === false) {
        $response['message'] = 'Database prepare failed: ' . $conn->error;
        echo json_encode($response);
        exit;
    }

    $stmt->bind_param("sssssssssi",
        $title, $entry_date, $image_url,
        $memory_verse_text, $memory_verse_reference, $study_bible_reference,
        $devotional_text, $prayer, $bible_reading_plan_text,
        $id
    );

    if ($stmt->execute()) {
        $response['success'] = true;
        // Check affected_rows to see if any data actually changed.
        if ($stmt->affected_rows > 0) {
            $response['message'] = 'Devotional entry updated successfully.';
        } else {
            // This could mean the ID was not found, or data was identical.
            // Check if ID exists to provide a more accurate message.
            $checkStmt = $conn->prepare("SELECT id FROM dld_entries WHERE id = ?");
            $checkStmt->bind_param("i", $id);
            $checkStmt->execute();
            $checkResult = $checkStmt->get_result();
            if ($checkResult->num_rows === 0) {
                $response['message'] = 'Entry with the given ID not found.';
                $response['success'] = false; // Explicitly set success to false if ID not found
            } else {
                 $response['message'] = 'No changes were made to the entry (data might be identical).';
            }
            $checkStmt->close();
        }
        if (!empty($response['upload_error'])) {
            $response['message'] .= ' Image upload issue: ' . $response['upload_error'];
        }
        // Return the potentially updated image_url and id
        $response['data'] = ['id' => $id, 'image_url' => $image_url];
    } else {
        $response['message'] = 'Database execute failed: ' . $stmt->error;
    }

    $stmt->close();

} else {
    $response['message'] = 'Invalid request method.';
}

$conn->close();
echo json_encode($response);
?>
