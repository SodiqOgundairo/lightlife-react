<?php

$allowedOrigins = ['https://dev.lightlifechurch.com', 'https://lightlifechurch.com', 'http://http://localhost:5173/'];
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

// Check for parameters: id, date, or all
$entryId = $_GET['id'] ?? null;
$entryDate = $_GET['date'] ?? null;

if ($entryId !== null) { // Fetch by ID (highest precedence)
    if (!filter_var($entryId, FILTER_VALIDATE_INT)) {
        $response['message'] = 'Invalid entry ID provided.';
    } else {
        $stmt = $conn->prepare("SELECT id, title, entry_date, image_url, memory_verse_text, memory_verse_reference, study_bible_reference, devotional_text, action_category, action_content, bible_reading_plan_text, created_at, updated_at FROM dld_entries WHERE id = ?");
        if ($stmt) {
            $stmt->bind_param("i", $entryId);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($entry = $result->fetch_assoc()) {
                $entry['id'] = (string)$entry['id'];
                $entries[] = $entry;
                $response['success'] = true;
            } else {
                $response['message'] = 'Entry not found with ID: ' . $entryId;
            }
            $stmt->close();
        } else {
            $response['message'] = 'Error preparing statement for ID fetch: ' . $conn->error;
        }
    }
} elseif ($entryDate !== null) { // Fetch by Date
    // Validate date format (YYYY-MM-DD)
    if (!preg_match("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/", $entryDate)) {
        $response['message'] = 'Invalid date format provided. Please use YYYY-MM-DD.';
    } else {
        $stmt = $conn->prepare("SELECT id, title, entry_date, image_url, memory_verse_text, memory_verse_reference, study_bible_reference, devotional_text, action_category, action_content, bible_reading_plan_text, created_at, updated_at FROM dld_entries WHERE entry_date = ? ORDER BY id DESC LIMIT 1"); // Get the latest if multiple for a date
        if ($stmt) {
            $stmt->bind_param("s", $entryDate);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($entry = $result->fetch_assoc()) {
                $entry['id'] = (string)$entry['id'];
                $entries[] = $entry; // Keep as array for consistency, though expecting one
                $response['success'] = true;
            } else {
                $response['message'] = 'No entry found for date: ' . $entryDate;
                // $response['success'] remains false, but data will be an empty array.
            }
            $stmt->close();
        } else {
            $response['message'] = 'Error preparing statement for date fetch: ' . $conn->error;
        }
    }
} else { // Fetch all entries
    $sql = "SELECT id, title, entry_date, image_url, memory_verse_text, memory_verse_reference, study_bible_reference, devotional_text, action_category, action_content, bible_reading_plan_text, created_at, updated_at FROM dld_entries ORDER BY entry_date DESC, id DESC";
    $result = $conn->query($sql);
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $row['id'] = (string)$row['id'];
            $entries[] = $row;
        }
        $response['success'] = true;
        if (empty($entries)) {
            $response['message'] = 'No entries found.';
        }
    } else {
        $response['message'] = 'Error fetching all entries: ' . $conn->error;
    }
}

$response['data'] = $entries; // Ensure data is always an array
echo json_encode($response);

$conn->close();
?>
