<?php
//connect with server
$link = mysqli_connect("localhost", "root", "");
if ($link) {
    echo "Connected with server</br>";
} else {
    echo "Error: can not connect with server</br>";
}

//creation database by query request
$db = "MyStudentsListDB";
$query = "CREATE DATABASE IF NOT EXISTS $db";

//request to database
$create_db = mysqli_query($link, $query);
if ($create_db) {
    echo "Database $db was created";
} else {
    echo "Database was not created";
}

?>