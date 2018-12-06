$(function(){
	var $here = $('.here');
	var $here2 = $('.here2');

	$here.click(function(e){
		e.preventDefault();
	});

	$here2.click(function(e){
		e.preventDefault();
	});

	var $hamburger = $('.hamburger');

	$hamburger.click(function(){
		this.classList.toggle("change");
		$('#nav-box').slideToggle();
	});

	$('#nav-box li').click(function(){
		$hamburger.removeClass("change");
		$('#nav-box').slideUp();
	});

	$(window).on('resize', function(){
   	if($(this).width() > 750){
   		$hamburger.removeClass("change");
       	$('#nav-box').slideUp();
  	 }});


	var now = new Date();
	var time = now.getHours() + ":" + now.getMinutes();

	switch (now.getDay()) {
		case 0:
			$('#day').text("Sunday");
			$('#hour').text("12:00 PM - 10:00 PM");
			if (time > "12:00" && time < "22:00") {
				$('#status').text("OPEN");
			}
			else {
				$('#status').text("CLOSE");
			}
			$('#Sunday').css({"color":"#F9E073","font-weight":"600"});
			break;
		case 1:
			$('#day').text("Monday");
			$('#hour').text("11:00 AM - 10:00 PM");
			if (time > "11:00" && time < "22:00") {
				$('#status').text("OPEN");
			}
			else {
				$('#status').text("CLOSE");
			}
			$('#Monday').css({"color":"#F9E073","font-weight":"600"});
			break;
		case 2:
			$('#day').text("Tuesday");
			$('#hour').text("11:00 AM - 10:00 PM");
			if (time > "11:00" && time < "22:00") {
				$('#status').text("OPEN");
			}
			else {
				$('#status').text("CLOSE");
			}
			$('#Tuesday').css({"color":"#F9E073","font-weight":"600"});
			break;
		case 3:
			$('#day').text("Wednesday");
			$('#hour').text("11:00 AM - 10:00 PM");
			if (time > "11:00" && time < "22:00") {
				$('#status').text("OPEN");
			}
			else {
				$('#status').text("CLOSE");
			}
			$('#Wednesday').css({"color":"#F9E073","font-weight":"600"});
			break;
		case 4:
			$('#day').text("Thursday");
			$('#hour').text("11:00 AM - 10:00 PM");
			if (time > "11:00" && time < "22:00") {
				$('#status').text("OPEN");
			}
			else {
				$('#status').text("CLOSE");
			}
			$('#Thursday').css({"color":"#F9E073","font-weight":"600"});
			break;
		case 5:
			$('#day').text("Friday");
			$('#hour').text("11:00 AM - 11:00 PM");
			if (time > "11:00" && time < "23:00") {
				$('#status').text("OPEN");
			}
			else {
				$('#status').text("CLOSE");
			}
			$('#Friday').css({"color":"#F9E073","font-weight":"600"});
			break;
		case 6:
			$('#day').text("Saturday");
			$('#hour').text("11:00 AM - 11:00 PM");
			if (time > "11:00" && time < "23:00") {
				$('#status').text("OPEN");
			}
			else {
				$('#status').text("CLOSE");
			}
			$('#Saturday').css({"color":"#F9E073","font-weight":"600"});
			break;
	}






});