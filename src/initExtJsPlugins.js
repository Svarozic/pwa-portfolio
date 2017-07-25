/**
 * Content of original ceevee-init.js
 */

export default function () {
    window.jQuery(document).ready(function ($) {

        /*----------------------------------------------------*/
        /* FitText Settings
         ------------------------------------------------------ */
        setTimeout(function () {
            $('.pp-hello.jquery-fittext').fitText(1, {minFontSize: '50px', maxFontSize: '90px'});
        }, 100);


        /*----------------------------------------------------*/
        /* Smooth Scrolling
         ------------------------------------------------------ */
        $('.smoothscroll').on('click', function (e) {
            e.preventDefault();

            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 800, 'swing', function () {
                window.location.hash = target;
            });
        });
    });
}