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

	function introHide() {
		$('#introBox').slideUp();
		$('#name').fadeIn();
		$('#title').fadeIn();
	}
	//MAIN SECTION ANIMATIONS
	$("#bioButton").click(function () {
		$("#bio").slideDown("slow");
		$("#gallery").slideUp("slow");
		$("#contact").slideUp("slow");
		introHide();
	});

	$("#galleryButton").click(function () {
		$("#bio").slideUp("slow");
		$("#gallery").slideDown("slow");
		$("#contact").slideUp("slow");
		introHide();
	});

	$("#contactButton").click(function () {
		$("#bio").slideUp("slow");
		$("#gallery").slideUp("slow");
		$("#contact").slideDown("slow");
		introHide();
	});

	//GALLERY ANIMATIONS
	$("#project1Cover").click(function () {
		$('#project1Content').slideToggle("slow");
	});

	$("#project2Cover").click(function () {
		$('#project2Content').slideToggle("slow");
	});

	$("#project3Cover").click(function () {
		$('#project3Content').slideToggle("slow");
	});

	$("#project4Cover").click(function () {
		$('#project4Content').slideToggle("slow");
	});

	$("#project5Cover").click(function () {
		$('#project5Content').slideToggle("slow");
	});

	$("#project6Cover").click(function () {
		$('#project6Content').slideToggle("slow");
	});
});