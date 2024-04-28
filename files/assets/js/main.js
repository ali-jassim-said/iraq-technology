/*========Loader js===========*/
$(window).on('load', function () {
	$(".loader").slideUp("slow");
	$("body").addClass("animate");
	$("html").addClass("animate");
});


/* ============= Navbar White =========*/
$(document).ready(function () {
	'use strict';

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > '20') {
			$('.nav-custom').addClass('nav-white');
		} else if (scroll < '20') {
			$('.nav-custom').removeClass('nav-white');
		}
	});
	$(document).ready(function () {
		var scroll = $(window).scrollTop();
		if (scroll > '20') {
			$('.nav-custom').addClass('nav-white');
		} else if (scroll < '20') {
			$('.nav-custom').removeClass('nav-white');
		}
	});

	setTimeout(function () {
		$('.navbar-brand').addClass('animate');
	}, 1000);
	setTimeout(function () {
		$('.navbar-nav li ').addClass('animate');
	}, 1100);
});


/* ============= Testimonial Slider =========*/

$(document).ready(function () {
	'use strict';
	$('.testimonial-slider').slick({
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		prevArrow: "<button class='slider-left '><img src='images/testimonial/left-arrow.png' alt='Left Arrow'/></button> ",
		nextArrow: "<button class='slider-right'><img src='images/testimonial/right-arrow.png' alt='Right Arrow'/></button> ",

		fade: true,
		autoplay: false,
		centerMode: true,
		centerPadding: 0,
		initialSlide: 0,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1
			}
		}]
	});


});
/* ============= Portfolio Gallary =========*/
$(window).on('load', function () {
	'use strict';
	var $container = $('.portfoliodiv');
	$container.isotope({
		filter: '*',
		layoutMode: 'masonry',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: true,
			layoutMode: 'fitRows'
		}
	});
	$('.filter ul li a').bind('click', function () {
		$('.filter .active').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');


		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				queue: true
			}
		});

		return false;
	});

});

/*============PHP Contact Form===========*/
$(document).ready(function () {
	'use strict';
	$(".contact-form").submit(function (event) {
		event.preventDefault();
		$.ajax({
			type: 'POST',
			url: 'contact.php',
			data: $(this).serialize(),
			success: function (text) {
				$(".error-msg").append("<div class='text-center mail-text'>" + text + "</div>")

			}
		});
	});
});
/*========Progress bar js=======*/
$(document).ready(function () {
	'use strict';
	$(document).ready(function () {
		$('.now').css("width", function () {
			return $(this).attr("data")
		})
	});
});

/*========Menu js============*/
$(document).ready(function () {
	'use strict';
	$(".nav-button-container").bind('click',function () {
		if ($('.nav-custom').hasClass("active")) {
			$('.nav-custom').removeClass("active");
			$('.nav-menu').removeClass("active");
		} else {
			$('.nav-custom').addClass("active");
			$('.nav-menu').addClass("active");
		}
	});

	$(".nav-menu-item li a").mouseover(function () {
		$(".nav-item-img li.active").removeClass("active");
		var a = $(this).parents("li").index() + 1;
		$(".nav-item-img li:nth-of-type(" + a + ")").addClass("active");
	});
	$(".nav-menu-item li a").mouseleave(function () {
		$(".nav-item-img li.active").removeClass("active");
	});
});
/*===contact form js====*/
$(".contact-form-input input").focusout(function () {
	'use strict';
	if ($(this).val() != "") {
		$(this).parents(".contact-form-input").find("label").addClass("active");
	} else {
		$(this).parents(".contact-form-input").find("label").removeClass("active");
	}
});
$(".contact-form-input textarea").focusout(function () {
	'use strict';
	if ($(this).val() != "") {
		$(this).parents(".contact-form-input").find("label").addClass("active");
	} else {
		$(this).parents(".contact-form-input").find("label").removeClass("active");
	}
});
/*=======custom select======*/
$("select").each(function () {
	'use strict';
	var $this = $(this),
		numberOfOptions = $(this).children("option").length;

	$this.addClass("select-hidden");
	$this.wrap('<div class="select"></div>');
	$this.after('<div class="select-styled"></div>');

	var $styledSelect = $this.next("div.select-styled");
	$styledSelect.text(
		$this
		.children("option")
		.eq(0)
		.text()
	);

	var $list = $("<ul />", {
		class: "select-options"
	}).insertAfter($styledSelect);

	for (var i = 0; i < numberOfOptions; i++) {
		$("<li />", {
			text: $this
				.children("option")
				.eq(i)
				.text(),
			rel: $this
				.children("option")
				.eq(i)
				.val()
		}).appendTo($list);
	}

	var $listItems = $list.children("li");

	$styledSelect.bind('click' ,function (e) {
		e.stopPropagation();
		$("div.select-styled.active")
			.not(this)
			.each(function () {
				$(this)
					.removeClass("active")
					.next("ul.select-options")
					.hide();
			});
		$(this)
			.toggleClass("active")
			.next("ul.select-options")
			.toggle();
	});

	$listItems.bind('click' ,function (e) {
		e.stopPropagation();
		$styledSelect.text($(this).text()).removeClass("active");
		$this.val($(this).attr("rel"));
		$list.hide();
		//console.log($this.val());
	});

	$(document).bind('click' ,function () {
		$styledSelect.removeClass("active");
		$list.hide();
	});
});

/*================== contact Form Php js ===========*/
$(".contact-from").submit(function (event) {
	event.preventDefault();
	$.ajax({
		type: 'POST',
		url: 'contact.php',
		data: $(this).serialize(),
		success: function (text) {
			$(".error-msg").append("<div class='text-center mail-text'>" + text + "</div>")

		}
	});
});

/*=============Map Js=================*/
function initMap() {
	// Styles a map in night mode.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 40.674,
			lng: -73.945
		},
		zoom: 12,
		styles: [{
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
				}]
			},
			{
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#616161"
				}]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [{
					"color": "#f5f5f5"
				}]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#bdbdbd"
				}]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
					"color": "#eeeeee"
				}]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#757575"
				}]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [{
					"color": "#e5e5e5"
				}]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#9e9e9e"
				}]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#757575"
				}]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [{
					"color": "#dadada"
				}]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#616161"
				}]
			},
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#9e9e9e"
				}]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [{
					"color": "#e5e5e5"
				}]
			},
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [{
					"color": "#eeeeee"
				}]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"color": "#c9c9c9"
				}]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#9e9e9e"
				}]
			}
		]
	});
}