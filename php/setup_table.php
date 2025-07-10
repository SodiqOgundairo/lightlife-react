<?php
require_once 'db_connect.php'; // Establishes $conn

$tableName = "dld_entries";

$sql = "CREATE TABLE IF NOT EXISTS $tableName (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    entry_date DATE NOT NULL, -- Renamed from 'date' to avoid SQL keyword conflict
    image_url VARCHAR(2083), -- Standard max URL length
    memory_verse_text TEXT,
    memory_verse_reference VARCHAR(255),
    study_bible_reference VARCHAR(255),
    devotional_text LONGTEXT NOT NULL,
    action_category TEXT,
    action_content TEXT,
    bible_reading_plan_text VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    // echo "Table '$tableName' created successfully or already exists.<br>";
} else {
    die("Error creating table $tableName: " . $conn->error . "<br>");
}

// The connection will be closed automatically when the script ends,
// or you can explicitly close it if this script is included and then no longer needed.
// $conn->close();
?>
