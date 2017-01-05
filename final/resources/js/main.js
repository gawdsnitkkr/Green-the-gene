function exit() {
	TweenMax.to ( "#home", 0.2, 
		{
			opacity: 0.05
		}	
		);
}
function enter() {
	TweenMax.to ( "#home", 0.2, 
		{
			opacity: 1,
			delay: 1
		}	
		);
}
function intro() {
	TweenMax.to ( "#home", 0.5, 
		{
			opacity: 1,
			scale: 0.95,
			delay: 0.2,
			ease: Back.easeOut
		}
		);
}
intro();
function head() {
	if(window.scrollY >= 10) {
		$('header').animate( {
		opacity: 1
		});
		$('header')[0].style.boxShadow = "0px 0px 4px 0px rgb(200, 200, 200)";
		$('header').html("<img src = 'resources/images/logo.png' style='width: 30px;margin: 20px'>");
	}
	else {
		$('header').animate( {
		opacity: 0
		});
		$('header')[0].style.boxShadow = "none";
		$('header').html("");
	}
}