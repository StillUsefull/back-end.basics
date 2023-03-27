<?php

//connect with server
$link = mysqli_connect("localhost", "root", "", "MyStudentsListDB");
if ($link) {
    echo "Connected with server</br>";
} else {
    echo "Error: can not connect with server</br>";
}

//Query request to create table
$sql = "CREATE TABLE Students (
    student_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_surname VARCHAR(50),
    student_birth_year INT,
    student_sex VARCHAR(20),
    student_group VARCHAR(20),
    student_faculty VARCHAR(30),
    student_avr_rating INT,
    student_work VARCHAR(50),
    student_city VARCHAR(50)
)";

//Request to create table
$create_table = mysqli_query($link, $sql); 
if ($create_table) { 
    echo "Table succesfully created</br>"; 
} else { 
    echo "Table was not created</br>"; 
};

?>