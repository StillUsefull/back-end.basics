<?php

//connect to db once
require_once("connection_db.php");


//create query request to get data from table "place_to_practice"
$query = "SELECT * FROM `place_to_practice`";
$result = mysqli_query($link, $query);

echo "<h1>Places for practice</h1>";

// if result is not emty
if ($result->num_rows > 0) { 
    foreach($result as $row){ //get every record from table and render it
        echo "<h2>";
        echo $row["place_id"] . " <a href='student_id='";
        echo $row["student_id"] . ">";
        echo $row["place_name"] . "</a> (";
        echo $row["place_type"] .")";
        echo "<br></h2>";
    }
} else {
    echo "<h2>I can not find places to monitor</h2>"; // if there is no results
} 

?>