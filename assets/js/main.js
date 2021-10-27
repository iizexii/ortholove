// document.addEventListener('DOMContentLoaded', () => {
// });
$(document).ready(() => {
	$("body #header").load("/header.html");
	$("body #footer").load("/footer.html");
	$(".owl-carousel").owlCarousel({
		loop: true,
		smartSpeed: 450,
		autoplay: false,
		nav: true,
		dots: false,
		navText: ["", ""],
		responsive: {
			0: {
				items: 1,
				center: true,
				margin: 40,
			},
			361: {
				items: 2,
				center: true,
				margin: 10,
			},
			481: {
				items: 2,
				center: true,
				margin: 30,
			},
			641: {
				items: 3,
				center: true,
				margin: 30,
			},
			769: {
				items: 4,
				margin: 20,
			},
			1000: {
				items: 5,
				margin: 10,
			}
		}
	});
})
