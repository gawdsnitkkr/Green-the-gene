<?php	
	require 'connect.php';
	$username = htmlentities($_POST['username']);
	$password = $_POST['password'];
	$email = $_POST['email'];
	$fullname = $_POST['fullname'];
	$query = "INSERT INTO login (username,password,email,college) values('".mysqli_real_escape_string($dbc,$username)."','".mysqli_real_escape_string($dbc,$pass)."','".mysqli_real_escape_string($dbc,$email)."','".mysqli_real_escape_string($dbc,$college)."')";
	$result = mysqli_query($dbc,$query);
	session_start();
	if(mysqli_query($dbc,$query)) {
		$_SESSION['username'] = $username;
		$_SESSION['check'] = 1;
	}
	else { 
		$_SESSION['check'] = 0;
	}
?>