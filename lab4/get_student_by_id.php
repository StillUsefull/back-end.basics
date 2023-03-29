<?php

//connect to db once
require_once("connection_db.php");

//redirect link
$redirect_to_index = "<h2><a href='index.php'>Redirect to index page</a></h2>";

//get student id from GET request
if (isset($_GET["student_id"])) { 
    $student_id = $_GET["student_id"]; 

} else {
    echo "<h3>I can not find student by id</h3>";
    echo $redirect_to_index;
    exit();
}

//get all places with responsed student_id
$sql = "SELECT * FROM Students WHERE student_id = " . $student_id;
$result = mysqli_query($link, $sql); 


//print solution
echo "<h1>Student: $student_id</h1><hr>"; 

if ($result->num_rows > 0) { 
    foreach($result as $row){ //get record
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
        echo "<br></h2>";
    }
} else {
    echo "<h2>This student has no places to practice</h2>"; // if there is no results
} 

echo $redirect_to_index;

?>