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
$sql = "SELECT * FROM place_to_practice WHERE student_id = " . $student_id;
$result = mysqli_query($link, $sql); 


//print solution
echo "<h1>Places where student with id: $student_id was</h1><hr>"; 

if ($result->num_rows > 0) { 
    foreach($result as $row){ //get every record from result of query request and render it
        echo "<h2>";
        echo $row["place_id"] . " <a href='student_id='";
        echo $row["student_id"] . ">";
        echo $row["place_name"] . "</a> (";
        echo $row["place_type"] .")";
        echo "<br></h2>";
    }
} else {
    echo "<h2>This student has no places to practice</h2>"; // if there is no results
} 

echo $redirect_to_index;

?>