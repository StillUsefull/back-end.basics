<?php

//connect to db once
require_once("connection_db.php");

$sql = "SELECT * FROM Students ORDER BY student_avr_rating DESC";
$result = mysqli_query($link, $sql); 

if ($result->num_rows > 0) { 
    echo "<h2>ID Surname Born Sex Group Faculty Raiting Work City</h2>";
    foreach($result as $row){ //get every record from result of query request and render it
        echo "<h2>";
        echo $row["student_id"] . ") ";
        echo $row["student_surname"] . " ";
        echo $row["student_birth_year"] . " ";
        echo $row["student_sex"] . " ";
        echo $row["student_group"] . " ";
        echo $row["student_faculty"] . " ";
        echo $row["student_avr_rating"] . " ";
        echo $row["student_work"] . " ";
        echo $row["student_city"] . " ";
        echo "</h2>";
    }
} else {
    echo "<h2>Table Students is empty</h2>"; // if there is no results
} 