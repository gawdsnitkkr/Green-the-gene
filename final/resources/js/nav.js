var toggle = 0;
function showBar() {
	if(toggle == 0) {
		TweenMax.to("#path4138", 0.5, 
		{
			rotationZ: 45,
			x: 12.912,
			y: -4.638,
			ease: Back.easeOut
		}
		);
		TweenMax.to ( "#nav-bar", 0.8, {
			x: -($('#nav-bar')[0].offsetWidth),
			ease: Back.easeOut
		}
		);
		TweenMax.to("#path4138-3", 0.5, 
		{
			rotationZ: -45,
			x: 12.912,
			y: 34.638,
			ease: Back.easeOut
		}
		);
		TweenMax.staggerTo(".nav-link", 0.1, 
		{
			opacity: 1,
			delay: 0.5
		},
		 0.05
		);
		TweenMax.to ( "#path4138-6", 0.2, 
		{
			opacity: 0
		}
		);
		TweenMax.to ( ".active", 0.1, 
		{
			opacity: 1,
			delay: 0.5
		}
		);
		exit();
		
		toggle = 1;
	}
	else {
		TweenMax.staggerTo(".nav-link", 0.1, 
		{
			opacity: 0,
		},
		 0.02
		);
		TweenMax.to("#path4138", 0.5, 
		{
			rotationZ: 0,
			x: 0,
			y: 0,
			delay: 0.8,
			ease: Back.easeIn
		}
		);
		TweenMax.to("#path4138-3", 0.5, 
		{
			rotationZ: 0,
			x: 0,
			y: 0,
			delay: 0.8,
			ease: Back.easeIn
		}
		);
		TweenMax.to ( "#path4138-6", 0.5, 
		{
			opacity: 1,
			delay: 1.2
		}
		);
		TweenMax.to ( ".active", 0.1, 
		{
			opacity: 0,
			delay: 0.2
		}
		);
		enter();
		TweenMax.to ( "#nav-bar", 0.8, {
			x: ($('#nav-bar')[0].offsetWidth),
			ease: Back.easeIn,
			delay: 0.2
		});
		toggle = 0;
	}
}

