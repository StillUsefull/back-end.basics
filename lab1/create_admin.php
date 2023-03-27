<?php

//connect with server
$link = mysqli_connect("localhost", "root", "");
if ($link) {
    echo "Connected with server</br>";
} else {
    echo "Error: can not connect with server</br>";
}

//creation user with name admin by query request
$create_query = "CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin'"; 
$grant_query = "GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION"; 

//request to create a user
$create_user = mysqli_query($link, $create_query); 
if ($create_user) { 
    echo "User successfully created</br>"; 
    //and grant admin rights
    $grant_permissions = mysqli_query($link, $grant_query); 
    if ($grant_permissions) { 
        echo "Administrator rights granted"; 
    } else { 
        echo "Administrator rights not granted"; 
    }
} else {
    echo "User not created</br>"; 
}
?>