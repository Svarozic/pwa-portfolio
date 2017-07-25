export default function () {
    window.jQuery(document).ready(function ($) {

        // Smooth Scrolling
        $('.smoothscroll').on('click', function (e) {
            e.preventDefault();

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