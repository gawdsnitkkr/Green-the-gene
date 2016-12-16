var signup = document.getElementById('signin');
var login = document.getElementById('login');
var signinButton = document.getElementById('signin-button');
var loginButton = document.getElementById('login-button');

function showSigninLogin(i) {
	if(i == 1) {
		signup.style.display = "none";
		signinButton.style.display = "none";
		login.style.display = "block";
		loginButton.style.display = "block";
	}
	else {
		signup.style.display = "block";
		loginButton.style.display = "none";
		login.style.display = "none";
		signinButton.style.display = "block";
	}
}
