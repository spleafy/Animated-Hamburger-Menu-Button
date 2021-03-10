$(document).ready(function() {
	let menuBtn = $(".menu-btn");
	let menuOpen = false;
	menuBtn.on("click", function() {
		menuBtn.addClass("noclick");
		if(!menuOpen) {
			menuBtn.removeClass("close");
			menuBtn.addClass("open");
			menuOpen = true;
			setTimeout(function() {
				menuBtn.removeClass("noclick");
			},1000);
		} else {
			menuBtn.removeClass("open");
			menuBtn.addClass("close");
			menuOpen = false;
			setTimeout(function() {
				menuBtn.removeClass("noclick");
			},1000);
		}
	});
});
