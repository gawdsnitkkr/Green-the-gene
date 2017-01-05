function exit() {
	TweenMax.to ( "#partners", 0.2, 
		{
			opacity: 0.05
		}	
		);
}
function enter() {
	TweenMax.to ( "#partners", 0.2, 
		{
			opacity: 1,
			delay: 1
		}	
		);
}
function intro() {
	TweenMax.to ( "#partners", 0.5, 
		{
			opacity: 1,
			scale: 0.90,
			delay: 0.2,
			ease: Back.easeOut
		}
		);
}
intro();