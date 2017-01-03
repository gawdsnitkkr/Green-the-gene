var toggle = 0;
function showBar() {
	if(toggle == 0) {
		TweenMax.to("#path4138", 0.5, 
		{
			rotationZ: 45,
			x: 12.912,
			y: -4.638,
			ease: Power4.easeNone
		}
		);
		TweenMax.to("#path4138-3", 0.5, 
		{
			rotationZ: -45,
			x: 12.912,
			y: 34.638,
			ease: Power4.easeNone
		}
		);
		TweenMax.staggerTo("a", 0.2, 
		{
			opacity: 1,
			delay: 0.2
		},
		 0.1
		);
		TweenMax.to ( "#path4138-6", 0.2, 
		{
			opacity: 0
		}
		);
		$('#nav-bar')[0].style.left = '80%';
		toggle = 1;
	}
	else {
		TweenMax.to("#path4138", 0.5, 
		{
			rotationZ: 0,
			x: 0,
			y: 0,
			ease: Power4.easeNone
		}
		);
		TweenMax.to("#path4138-3", 0.5, 
		{
			rotationZ: 0,
			x: 0,
			y: 0,
			ease: Power4.easeNone
		}
		);
		TweenMax.to ( "#path4138-6", 0.2, 
		{
			opacity: 1
		}
		);
		$('#nav-bar')[0].style.left = '110%';
		for( i = 0 ; i < 6 ; i++) {
			$('a').css('opacity' , '0');
		}
		toggle = 0;
	}
}

