<?php
$servername = "localhost"; // Changed from lightlifechurch.com
$username = "lightlif_admin";
$password = "!W&EgD5qbaaV~6w!";
$dbname = "lightlife_church";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully"; // Optional: for testing connection
?>
