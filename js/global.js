$(document).ready(function() {
	//Navigation
	$(".navigation-icon").click(function() {

		if (!$(this).hasClass("active")) { 
			$(".main-navigation__container").slideDown(function() {
				$(this).addClass("active");
			});
			$(this).addClass("active");
		}

		else {
			$(".main-navigation__container").slideUp(function() {
				$(this).removeClass("active");
			});
			$(this).removeClass("active");
		}
	});
	
});