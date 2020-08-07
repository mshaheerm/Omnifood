$(document).ready(function() {
    /* STICKY NAVIGATION*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    },  {
        offset: '60px'
      });


      /* SCROLL ON BUTTONS*/
      $('.js--scroll-to-plan').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);

      });

      $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

      });

      /* ANIMATIONS ON SCROLL */

      $('.js--wp-1').waypoint(
        (direction) => {
          $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
      );

      $('.js--wp-2').waypoint(
        (direction) => {
          $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        },
        {
          offset: '50%',
        }
      );

      $('.js--wp-3').waypoint(
        (direction) => {
          $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
      );

      $('.js--wp-4').waypoint(
        (direction) => {
          $('.js--wp-4').addClass('animate__animated animate__pulse');
        },
        {
          offset: '50%',
        }
      );

      /* RESETTING ANIMATIONS WHEN GOING FROM TOP TO BOTTOM */
      $('.js--header').waypoint(
        (direction) => {
          if (direction === 'up') {
            $('.js--wp-1').removeClass('animate__animated animate__fadeIn');
            $('.js--wp-2').removeClass('animate__animated animate__fadeInUp');
            $('.js--wp-3').removeClass('animate__animated animate__fadeIn');
            $('.js--wp-4').removeClass('animate__animated animate__bounceIn');
          }
        },
        {
          offset: '-25%',
        }
      );

      /* MOBILE NAVIGATION */
      $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')){
          icon.addClass('ion-close-round')
          icon.removeClass('ion-navicon-round')
        } else {
          icon.addClass('ion-navicon-round')
          icon.removeClass('ion-close-round')
        }

      });
});