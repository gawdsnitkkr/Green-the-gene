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
			ease: Power4.easeNone
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
		TweenMax.to ( "#home", 0.2, 
		{
			opacity: 0.1
		}	
		);
		
		toggle = 1;
	}
	else {
		TweenMax.staggerTo(".nav-link", 0.1, 
		{
			opacity: 0,
		},
		 0.05
		);
		TweenMax.to("#path4138", 0.5, 
		{
			rotationZ: 0,
			x: 0,
			y: 0,
			delay: 0.8,
			ease: Power4.easeNone
		}
		);
		TweenMax.to("#path4138-3", 0.5, 
		{
			rotationZ: 0,
			x: 0,
			y: 0,
			delay: 0.8,
			ease: Power4.easeNone
		}
		);
		TweenMax.to ( "#path4138-6", 0.5, 
		{
			opacity: 1,
			delay: 1
		}
		);
		TweenMax.to ( "#home", 0.2, 
		{
			opacity: 1,
			delay: 0.5
		}	
		);
		TweenMax.to ( "#nav-bar", 0.8, {
			x: ($('#nav-bar')[0].offsetWidth),
			ease: Back.easeOut,
			delay: 0.5
		});
		toggle = 0;
	}
}

