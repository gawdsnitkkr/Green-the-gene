<?php
if (isset($_POST['login'])) {
	require 'login.php';
}
if(isset($_POST['signin'])) {
	require 'signin.php';
}
if(isset($_POST['signin']) || isset($_POST['login'])) {
	if($_SESSION['check'] == 0) {
			echo '<h3>Something Wrong...</h3>';
	}
	else {
		header("Location: home.html");
	}
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Welcome Green the Gane</title>
	<link rel="stylesheet" type="text/css" href="css/signinLogin.css">
</head>
<body>
<form method="post" id="login" >
	<input type="text" name="username" class="text-feild" placeholder="Username" required><br>
	<input type="password" name="password" class="text-feild" placeholder="Password" required><br>
	<input type="submit" name="login" value="Login"><br>
</form>
<form method="post"  id="signin">
	<input type="text" name="fullname" class="text-feild" placeholder=" Full Name" required><br>
	<input type="text" name="username" class="text-feild" placeholder="Username" required><br>
	<input type="password" name="password" class="text-feild" placeholder="Password" required><br>
	<input type="email" name="email" class="text-feild" placeholder="Email" required><br>
	<input type="submit" name="signin" value="Sign In">
</form>
<button id="signin-button" onclick="showSigninLogin(1)"> Log In</button>
<button id="login-button" onclick="showSigninLogin(2)"> Sign Up</button>
</body>
<script type="text/javascript" src="js/signUp Login.js"></script>
</html>