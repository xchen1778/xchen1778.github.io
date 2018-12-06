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

});