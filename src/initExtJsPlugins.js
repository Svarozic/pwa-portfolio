export default function () {
	window.jQuery(document).ready(function ($) {

		// Smooth Scrolling
		$('.smoothscroll').on('click', function (e) {
			e.preventDefault();

			if (window.gtag) {
				window.gtag('event', 'click', {
					'event_category': 'navigation_bar',
					'event_label': 'navigation_bar_link',
					'value': this.hash
				});
			}

			let target = this.hash,
				$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 800, 'swing', function () {
				window.location.hash = target;
			});
		});
	});
}