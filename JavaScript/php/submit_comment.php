<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $mail = htmlspecialchars($_POST['mail']);
    $comment = htmlspecialchars($_POST['comment']);

    // Connect to the database (adjust with your database credentials)
    $conn = new mysqli('localhost', 'username', 'password', 'database');

    if ($conn->connect_error) {
        die('Connection failed: ' . $conn->connect_error);
    }

    $sql = "INSERT INTO comments (name, email, comment) VALUES ('$name', '$mail', '$comment')";

    if ($conn->query($sql) === TRUE) {
        echo 'Comment added successfully';
    } else {
        echo 'Error: ' . $sql . '<br>' . $conn->error;
    }

    $conn->close();
}
?>
