<?php
$servername = "localhost";
$username = "lightlif_admin";
$password = "!W&EgD5qbaaV~6w!";
$dbname = "lightlif_church";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully"; // Optional: for testing connection
?>
