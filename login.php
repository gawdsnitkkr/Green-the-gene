<?php
	if (isset($_POST['login'])) {
		require 'connect.php';
		$username = ($_POST['username']);
		$password = ($_POST['password']);
		$query = "SELECT *FROM login WHERE username = '$username'";
		$result = mysqli_query($dbc,$query);
		$responce = mysqli_fetch_assoc($result);

		if($username != '') {
			if($username == $responce['username'] && $password == $responce['password']) {
				session_start();
				$_SESSION['username'] = $username;
				$_SESSION['check'] = 1;
				// header( "Location: home.html");
			}
			else {
				$_SESSION['check'] = 0;
			}
		}
		else {
			$_SESSION['check'] = 0;
		}
	}
?>