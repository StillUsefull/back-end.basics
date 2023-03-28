<?php

//connect to db once
require_once("connection_db.php");

 
if (isset($_GET['student_id'])) {
    $student_id = $_GET['student_id'];
} else {
    echo "<h2>I can not find student with this id</h2>";
    exit();
}

$sql = "DELETE FROM Students WHERE `Students`.`student_id` = $student_id"; 
$result = mysqli_query($link, $sql); 

if ($result === TRUE) { 
    echo "<h1>Student was succesfully deleted</h1>"; 
} else { 
    echo "<h1>Error: I can not delete student</h1>"; 
}

echo "<hr><h2><a href='students.php?student_id=$student_id'>Back</a></h2>";

?>