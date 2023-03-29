<?php


//connect to db once
require_once("connection_db.php");

//function to create message on html

function print_message($link, $sql, $goodstr, $badstr) { 
    $result = mysqli_query($link, $sql); 
    if ($result->num_rows == 1) { 
        $row = mysqli_fetch_assoc($result); 
        $row_count = $row['row_count'];
        $message = $goodstr . $row_count; //point is to add strings
    } else { 
        $message = $badstr; 
    }
    echo "<h2>$message</h2>";
}

echo "<h1>Statistic of places and students</h2>";


//sql requests

$sql_students_count = "SELECT COUNT(*) AS row_count FROM Students"; //count of students in table Students
$sql_places_count = "SELECT COUNT(*) AS row_count FROM place_to_practice";  //count of places in table place_to_practice
$sql_last_month_count_students = "SELECT COUNT(*) AS row_count FROM Students WHERE DATEDIFF(NOW(), created_at) <= 30"; //count of students in table Students that was added by last 30 days
$sql_last_month_count_places = "SELECT COUNT(*) AS row_count FROM place_to_practice WHERE DATEDIFF(NOW(), created_at) <= 30"; //count of places in table place_to_practice that was added by last 30 days
$last_added_student = "SELECT * FROM Students ORDER BY date_placed DESC LIMIT 1"; //get last added student
$sql_connect_count = "SELECT p.place_id, p.place_name, p.place_type, COUNT(i.place_id) AS place_count FROM place_to_practice p INNER JOIN Students s ON p.student_id = s.student_id GROUP BY p.student_id ORDER BY place_count DESC LIMIT 1"; // count of places that are connected 

print_message($link, $sql_students_count, "Count of students in database:", "I can not find studens in database");
print_message($link, $sql_places_count, "Count of places to practice in database:", "I can not find places in database");
print_message($link, $sql_last_month_count_students, "Count of students that was added last month in database:", "I can not find studens by month in database");
print_message($link, $sql_last_month_count_places, "Count of places that was added last month in database:", "I can not find places by month in database");

$last_added_student_result = mysqli_query($link, $last_added_student); 
if (mysqli_num_rows($last_added_student_result) > 0) { 
    $result = mysqli_fetch_assoc($last_added_student_result); 
    echo "<h2>Last added student: <a href=get_student_by_id.php?student_id=" . $result['student_id'] .  ">" . $result['student_surname'] . "</a><h2>";

} else {
    echo "<h2>Error: i can not find info about last added student</h2>";
}

$connect_count_result = mysqli_query($link, $sql_connect_count); 
if ($connect_count_result && mysqli_num_rows($connect_count_result) > 0) { 
    $row = mysqli_fetch_assoc($connect_count_result); 
    $place_name = $row['place_name'];
    $place_type = $row['place_type'];
    $student_id = $row['student_id'];
    echo "<h2>" . $place_name . $place_type . $student_id ."</h2>";
} else {
    echo "<h2>I can not find places</h2>";
}



?>