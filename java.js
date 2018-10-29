$(document).ready(function () {
	//START PAGE ANIMATIONS
	$("#startButton").click(function () {
		$("#triangle-down, #triangle-up, #startButton").addClass("usenand");
		$('#page').addClass('krassInefade');
		$("#triangle-up, #triangle-down").delay(1500).fadeOut();
		setTimeout(function () {
			$("#startButton").fadeOut(500);
		}, 1);
	});

	//MAIN SECTION ANIMATIONS
	$("#bioButton").click(function () {
		$("#bio").slideToggle("slow");
		$('#introBox').slideUp();
		$('#name').fadeIn();
		$('#title').fadeIn();
	});

	$("#galleryButton").click(function () {
		$("#gallery").slideToggle("slow");
		$('#introBox').slideUp();
		$('#name').fadeIn();
		$('#title').fadeIn();
	});

	$("#contactButton").click(function () {
		$("#contact").slideToggle("slow");
		$('#introBox').slideUp();
		$('#name').fadeIn();
		$('#title').fadeIn();
	});

	//GALLERY ANIMATIONS
	$("#project1Cover").click(function () {
		if ($(window).width() <=960) {
			$('#project1Content').slideToggle("slow");
		}
		else {
			$("#project1Content").animate({ width: 'toggle' }, 350);
			$("#project1Buttons").slideToggle("slow");

		}
	});

	$("#project2Cover").click(function () {
		if ($(window).width() <=960) {
			$('#project2Content').slideToggle("slow");
		}
		else {
			$("#project2Content").animate({ width: 'toggle' }, 350);
		}
	});

	$("#project3Cover").click(function () {
		if ($(window).width() <=960) {
			$('#project3Content').slideToggle("slow");
		}
		else {
			$("#project3Content").animate({ width: 'toggle' }, 350);
		}
	});
});