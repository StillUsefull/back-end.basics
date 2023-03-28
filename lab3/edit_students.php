<?php

//connect to db once
require_once("connection_db.php");

//get student id from query from request
$student_id = $_GET['student_id']; 

?>

<h1>Edit student`s info</h1>

<!--Form to edit student -->

<form style="font-size:25px" method="POST">
    <br/>

    
    <input type="text" name="student_surname">
    <label>Student`s surname</label><br/>
   
    <input type="number" min="2000" max="2004" name="student_birth_year">
    <label>Student`s birth year</label><br/>
    
    <input type="text" name="student_sex">
    <label>Student`s sex</label><br/>

    <input type="text" name="student_group">
    <label>Student`s group</label><br/>

    <input type="text" name="student_faculty">
    <label>Student`s faculty</label><br/>

    <input type="text" name="student_avr_rating">
    <label>Student`s average rating</label><br/>
 
    <input type="text" name="student_work">
    <label>Student`s place to work</label><br/>
    
    <input type="text" name="student_city">
    <label>Student`s city</label><br/>
    <br />
    <button style="font-size: 30px"type="submit">UPDATE</button>
</form>

<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') { 
    $student_surname = $_POST['student_surname']; 
    $student_birth_year = $_POST['student_birth_year'];
    $student_sex = $_POST['student_sex'];
    $student_group = $_POST['student_group'];
    $student_faculty = $_POST['student_faculty'];
    $student_avr_rating = $_POST['student_avr_rating'];
    $student_work = $_POST['student_work'];
    $student_city = $_POST['student_city'];

    $sql = "UPDATE Students SET student_surname='$student_surname', student_birth_year='$student_birth_year', student_sex='$student_sex', student_group='$student_group', student_faculty='$student_faculty', student_avr_rating='$student_avr_rating', student_work='$student_work', student_city='$student_city')"; 

    $update_result = mysqli_query($link, $sql); 
}
$sql = "SELECT * FROM Students WHERE student_id = '$student_id' LIMIT 1"; 
$result = mysqli_query($link, $sql); 

if ($result->num_rows == 1) { 
    $row = $result->fetch_assoc(); 
    $student_surname = $row['student_surname']; 
    $student_birth_year = $row['student_birth_year']; 
    $student_sex = $row['student_sex']; 
    $student_group = $row['student_group']; 
    $student_faculty = $row['student_faculty']; 
    $student_avr_rating = $row['student_avr_rating']; 
    $student_work = $row['student_work']; 
    $student_city = $row['student_city']; 
} else { 
    echo "<h1>I can not find student<h1>"; 
    echo "<hr><h2><a href='index.php'>Return to create new student</a></h2>"; 
    exit(); 
} 
?>



<br/>
<h3>
    <a href='students.php?student_id=<?php echo $student_id?>'>Back</a> 
</h3>