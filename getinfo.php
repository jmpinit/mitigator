<?php
$db = mysql_connect("localhost", "root", "404ne73mo") or die(mysql_error());

mysql_select_db("mitigator") or die(mysql_error());

//get the q parameter from URL
$q=$_GET["q"];

// Retrieve all the data from the "tasks" table
$result = mysql_query("SELECT * FROM tasks")
or die(mysql_error());  

// store the record of the "tasks" table into $row
$row = mysql_fetch_array( $result );
// Print out the contents of the entry 

echo $row['name'];
?>
