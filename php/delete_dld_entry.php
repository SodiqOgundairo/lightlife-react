<?php

$allowedOrigins = ['https://dev.lightlifechurch.com', 'https://lightlifechurch.com', 'http://http://localhost:5173/'];
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); // Added POST
header('Access-Control-Allow-Headers: Content-Type');
// header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json');

require_once 'db_connect.php'; // Establishes $conn

$response = ['success' => false, 'message' => ''];

// Check if this is a POST request (preferred for delete) or allow GET if simple.
// For more robust applications, ensure it's POST or DELETE method.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // If sending JSON: $input = json_decode(file_get_contents('php://input'), true); $id = $input['id'] ?? null;
    // If sending form-data:
    $id = $_POST['id'] ?? null;
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') { // Less ideal for delete, but for simplicity
    $id = $_GET['id'] ?? null;
} else {
    $response['message'] = 'Invalid request method.';
    echo json_encode($response);
    exit;
}


if (empty($id) || !filter_var($id, FILTER_VALIDATE_INT)) {
    $response['message'] = 'Valid Entry ID is required.';
    echo json_encode($response);
    $conn->close();
    exit;
}

// --- Cloudinary Integration Placeholder for Delete ---
// Before deleting the database record, you might want to delete the associated image from Cloudinary.
// 1. Fetch the entry from the database to get its `image_url`.
//    $fetchStmt = $conn->prepare("SELECT image_url FROM dld_entries WHERE id = ?");
//    $fetchStmt->bind_param("i", $id);
//    $fetchStmt->execute();
//    $result = $fetchStmt->get_result();
//    if ($entry = $result->fetch_assoc()) {
//        $imageUrlToDelete = $entry['image_url'];
//        if (!empty($imageUrlToDelete)) {
//            // 2. Parse the public_id from $imageUrlToDelete.
//            // 3. Use Cloudinary SDK to delete the image by its public_id.
//            //    Example: \Cloudinary\Uploader::destroy($public_id);
//            // Handle potential errors during Cloudinary deletion.
//        }
//    }
//    $fetchStmt->close();
// For now, we are only deleting the database record.

$stmt = $conn->prepare("DELETE FROM dld_entries WHERE id = ?");

if ($stmt === false) {
    $response['message'] = 'Prepare failed: ' . $conn->error;
    echo json_encode($response);
    $conn->close();
    exit;
}

$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    if ($stmt->affected_rows > 0) {
        $response['success'] = true;
        $response['message'] = 'Devotional entry deleted successfully.';
    } else {
        $response['message'] = 'Entry not found or already deleted.';
        // $response['success'] remains false as no action was effectively taken on an existing record
    }
} else {
    $response['message'] = 'Execute failed: ' . $stmt->error;
}

$stmt->close();
$conn->close();
echo json_encode($response);
?>
