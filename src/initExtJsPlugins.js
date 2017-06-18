/**
 * Content of original ceevee-init.js
 */

export default function () {
    window.jQuery(document).ready(function ($) {

        /*----------------------------------------------------*/
        /* FitText Settings
         ------------------------------------------------------ */
        setTimeout(function () {
            $('h1.fittext-responsive-headline').fitText(1, {minFontSize: '40px', maxFontSize: '90px'});
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


        /*----------------------------------------------------*/
        /*	Modal Popup
         ------------------------------------------------------*/

        // $('.item-wrap a').magnificPopup({
        //
        //     type: 'inline',
        //     fixedContentPos: false,
        //     removalDelay: 200,
        //     showCloseBtn: false,
        //     mainClass: 'mfp-fade'
        //
        // });
        //
        // $(document).on('click', '.popup-modal-dismiss', function (e) {
        //     e.preventDefault();
        //     $.magnificPopup.close();
        // });


        /*----------------------------------------------------*/
        /*	Flexslider
         /*----------------------------------------------------*/
        // $('.flexslider').flexslider({
        //     namespace: 'flex-',
        //     controlsContainer: '.flex-container',
        //     animation: 'slide',
        //     controlNav: true,
        //     directionNav: false,
        //     smoothHeight: true,
        //     slideshowSpeed: 7000,
        //     animationSpeed: 600,
        //     randomize: false,
        // });


        /*----------------------------------------------------*/
        /*	contact form
         ------------------------------------------------------*/
        //GRYF remove contact form and reference on PHP endpoint
        // $('form#contactForm button.submit').click(function () {
        //
        //     $('#image-loader').fadeIn();
        //
        //     const contactName = $('#contactForm #contactName').val();
        //     const contactEmail = $('#contactForm #contactEmail').val();
        //     const contactSubject = $('#contactForm #contactSubject').val();
        //     const contactMessage = $('#contactForm #contactMessage').val();
        //
        //     const data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
        //         '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;
        //
        //     $.ajax({
        //
        //         type: 'POST',
        //         url: 'inc/sendEmail.php',
        //         data: data,
        //         success: function (msg) {
        //
        //             // Message was sent
        //             if (msg === 'OK') {
        //                 $('#image-loader').fadeOut();
        //                 $('#message-warning').hide();
        //                 $('#contactForm').fadeOut();
        //                 $('#message-success').fadeIn();
        //             }
        //             // There was an error
        //             else {
        //                 $('#image-loader').fadeOut();
        //                 $('#message-warning').html(msg);
        //                 $('#message-warning').fadeIn();
        //             }
        //
        //         }
        //
        //     });
        //     return false;
        // });
    });
}