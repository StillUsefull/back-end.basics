<?php

//connect to db once
require_once("connection_db.php");

//get student id from query from request
$student_id = $_GET['student_id']; 
?>

<h1>Add new student</h1>

<!--Form to add new student -->

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
    <button style="font-size: 30px"type="submit">Add</button>
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

    $sql = "INSERT INTO Students (student_surname, student_birth_year, student_sex, student_group, student_faculty, student_avr_rating, student_work, student_city) VALUES ('$student_surname', $student_birth_year, '$student_sex', '$student_group', '$student_faculty', '$student_avr_rating', '$student_work', '$student_city')"; 

    $result = mysqli_query($link, $sql); 

    if ($result === TRUE) {
        echo "<h3>New Student was succesfully created.</h3>"; 
    } else { 
        echo "<h3>Error: i can not create new Student</h3>"; 
    } 
}
?>

<br/>
<h3>
    <a href='students.php?student_id=<?php echo $student_id?>'>Back</a> 
</h3>