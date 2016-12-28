var slide = document.getElementById('slide');
function move_side_bar() {
	slide.style.left="0%";
}
function onClick(tab) {
	if(tab == "home") {
		window.open('index.html',"_self");
	}
}