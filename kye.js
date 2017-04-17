/* code for parallax banner smooth scroll button */

$( document ).ready(function() {

$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	});
});
});
