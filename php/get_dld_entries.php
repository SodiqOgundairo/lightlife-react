<?php

$allowedOrigins = ['https://dev.lightlifechurch.com', 'https://lightlifechurch.com'];
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
// header('Access-Control-Allow-Credentials: true'); // If you need cookies/sessions

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json');
require_once 'db_connect.php'; // Establishes $conn
require_once 'setup_table.php'; // Ensures table 'dld_entries' exists

$response = ['success' => false, 'message' => '', 'data' => null];
$entries = [];

// Check if an ID is provided to fetch a specific entry
$entryId = $_GET['id'] ?? null;

if ($entryId !== null) {
    if (!filter_var($entryId, FILTER_VALIDATE_INT)) {
        $response['message'] = 'Invalid entry ID provided.';
        echo json_encode($response);
        $conn->close();
        exit;
    }
    $stmt = $conn->prepare("SELECT id, title, entry_date, image_url, memory_verse_text, memory_verse_reference, study_bible_reference, devotional_text, prayer, bible_reading_plan_text, created_at, updated_at FROM dld_entries WHERE id = ?");
    if ($stmt) {
        $stmt->bind_param("i", $entryId);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($entry = $result->fetch_assoc()) {
            $entry['id'] = (string)$entry['id']; // Cast id to string
            $entries[] = $entry; // Keep it as an array for consistency, even if single
            $response['success'] = true;
        } else {
            $response['message'] = 'Entry not found.';
        }
        $stmt->close();
    } else {
        $response['message'] = 'Error preparing statement: ' . $conn->error;
    }
} else {
    // Fetch all entries, ordered by date descending
    $sql = "SELECT id, title, entry_date, image_url, memory_verse_text, memory_verse_reference, study_bible_reference, devotional_text, prayer, bible_reading_plan_text, created_at, updated_at FROM dld_entries ORDER BY entry_date DESC, id DESC";
    $result = $conn->query($sql);

    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $row['id'] = (string)$row['id']; // Cast id to string
            $entries[] = $row;
        }
        $response['success'] = true;
        if (empty($entries)) {
            $response['message'] = 'No entries found.';
        }
    } else {
        $response['message'] = 'Error fetching entries: ' . $conn->error;
    }
}

$response['data'] = $entries;
echo json_encode($response);

$conn->close();
?>
