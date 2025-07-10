<?php

$allowedOrigins = ['https://dev.lightlifechurch.com', 'https://lightlifechurch.com','http://http://localhost:5173/'];
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
// header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json'); // We'll be sending JSON responses

require_once 'db_connect.php'; // Establishes $conn
require_once 'setup_table.php'; // Ensures table 'dld_entries' exists
require_once 'cloudinary_helper.php'; // Include Cloudinary helper

$response = ['success' => false, 'message' => '', 'data' => null, 'upload_error' => null];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Form data will be 'multipart/form-data' due to file upload

    $title = $_POST['title'] ?? null;
    $entry_date = $_POST['date'] ?? null;
    $memory_verse_text = $_POST['memoryVerseText'] ?? null;
    $memory_verse_reference = $_POST['memoryVerseRef'] ?? null;
    $study_bible_reference = $_POST['studyBibleRef'] ?? null;
    $devotional_text = $_POST['devotionalText'] ?? null;
    $action_category = $_POST['action_category'] ?? null;
    $action_content = $_POST['action_content'] ?? null;
    $bible_reading_plan_text = $_POST['bibleReadingPlan'] ?? null;

    $image_url = null; // Initialize image_url

    // --- Cloudinary Image Upload ---
    // Frontend will send image file under 'imageFile' (or similar, to be defined in frontend form)
    if (isset($_FILES['imageFile']) && $_FILES['imageFile']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['imageFile']['tmp_name'];

        $uploadResult = uploadToCloudinaryViaCurl($fileTmpPath);

        if ($uploadResult['success']) {
            $image_url = $uploadResult['url'];
        } else {
            // Decide how to handle upload failure:
            // Option 1: Stop and return error
            // $response['message'] = 'Entry creation failed due to image upload error.';
            // $response['upload_error'] = $uploadResult['error'];
            // echo json_encode($response);
            // exit;
            // Option 2: Log error and continue without image (current implementation)
            $response['upload_error'] = "Cloudinary upload failed: " . ($uploadResult['error'] ?? 'Unknown error');
            // $image_url remains null or empty
        }
    } elseif (isset($_FILES['imageFile']) && $_FILES['imageFile']['error'] !== UPLOAD_ERR_NO_FILE) {
        // An error occurred with the file upload, other than no file being submitted
        $response['upload_error'] = 'Image file upload error code: ' . $_FILES['imageFile']['error'];
    }
    // If no file is uploaded, $image_url remains null. Fallback is handled by frontend.

    // Basic Validation
    if (empty($title)) {
        $response['message'] = 'Title is required.';
        echo json_encode($response);
        exit;
    }
    if (empty($entry_date)) {
        $response['message'] = 'Date is required.';
        echo json_encode($response);
        exit;
    }
    if (empty($devotional_text)) {
        $response['message'] = 'Devotional text is required.';
        echo json_encode($response);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO dld_entries (title, entry_date, image_url, memory_verse_text, memory_verse_reference, study_bible_reference, devotional_text, action_category, action_content, bible_reading_plan_text) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

    if ($stmt === false) {
        $response['message'] = 'Database prepare failed: ' . $conn->error;
        echo json_encode($response);
        exit;
    }

    $stmt->bind_param("sssssssss",
        $title,
        $entry_date,
        $image_url, // This will be the Cloudinary URL or null
        $memory_verse_text,
        $memory_verse_reference,
        $study_bible_reference,
        $devotional_text,
        $action_category,
        $action_content,
        $bible_reading_plan_text
    );

    if ($stmt->execute()) {
        $response['success'] = true;
        $newEntryId = $conn->insert_id;
        $response['message'] = 'New devotional entry created successfully.';
        if (!empty($response['upload_error'])) {
             $response['message'] .= ' However, there was an issue with the image upload: ' . $response['upload_error'];
        }
        $response['data'] = ['id' => $newEntryId, 'image_url' => $image_url];
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
