<?php

$link = mysqli_connect("localhost", "root", "", "MyStudentsListDB"); 

if (mysqli_connect_errno()) { 
    echo "<br><p>Can not connect to db (".mysqli_connect_errno()."): ". mysqli_connect_error()."</p>"; 
    exit(); 
}
?>