$(document).ready(function() {
	'use strict';

	$('#carousel').carousel();

	$('.owl-carousel').owlCarousel({
	    loop: true,
	    nav: true,
	    navContainerClass: 'owl-navigation',
	    dots: false,
	    navText: [],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})

});