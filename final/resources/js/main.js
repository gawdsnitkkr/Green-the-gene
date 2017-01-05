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