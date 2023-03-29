<h1>Searching places by name</h1> 
<form method="GET"> 
    <label for="search_term">Name-key:</label> 
    <input type="text" id="search_term" name="search_term"> 
    <button type="submit">Find</button> 
</form> 

<?php
    if (isset($_GET['search_term'])) { 
        $search_term = $_GET['search_term']; 

        //connect to db once
        require_once("connection_db.php");

        $sql = "SELECT * FROM place_to_practice WHERE place_name LIKE '%$search_term%'"; 
        $result = mysqli_query($link, $sql); 
        if (!$result) { 
            die('Error: ' . mysqli_error($link)); 
        }
        if (mysqli_num_rows($result) > 0) { 
            echo "<h3>Search results ''$search_term'':</h3>"; 
            while ($row = mysqli_fetch_assoc($result)) { 
                echo "<hr>" . $row['place_name'] . " (" . $row['place_type'] . ")</li>"; 
            } 
        } else { 
            echo "<h3>I can not find places by text: '" . $search_term . "'</h3>"; 
        }
    }
    echo "<hr><h3><a href='index.php'>Back to the index page</a></h3>"; 
?>