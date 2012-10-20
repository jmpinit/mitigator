<?php
$db = mysql_connect("localhost", "root", "404ne73mo") or die(mysql_error());

mysql_select_db("mitigator") or die(mysql_error());

$q = mysql_real_escape_string($_GET["q"]);

switch($q) {
	case "collections":
		$result = mysql_query("SELECT * FROM collections") or die(mysql_error());
		
		$response = "";
		while ($row = mysql_fetch_array($result)) {
			$response = $response.$row['collection'].",";
		}

		echo $response;
		
		mysql_free_result($result);
		break;
	case "tasks":
		$collection = mysql_real_escape_string($_GET["c"]);
		
		//find the tasks in the collection
		$task_ids = mysql_query("SELECT task FROM collections WHERE collection=\"".$collection."\"") or die(mysql_error());
		$tasks = array();
		while ($id = mysql_fetch_array($task_ids)) {
			//get task info
			$task_result = mysql_query("SELECT * FROM tasks WHERE id=\"".$id["task"]."\"") or die(mysql_error());
			array_push($tasks, mysql_fetch_array($task_result));
		}
		
		$response = "";
		foreach ($tasks as &$task) {
			$response .= $task['name'].",";
			$response .= $task['description'].",";
			$response .= $task['notes'].",";
			$response .= $task['creation'].",";
			$response .= $task['due'].",";
			$response .= $task['modified'].",";
			$response .= $task['completed'].";";
		}

		echo $response;
		break;
	
	default:
		echo " ";
}
?>
