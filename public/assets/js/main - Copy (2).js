(function ($) {
   'use strict'

   /*===============================
      pre-loader
   ===============================*/
   $(window).on('load', function () {
      $('#preloader-active').fadeOut('slow');
   });
   /*==============================
   // header
   ================================*/
   $(window).on("scroll", function () {
      if ($(window).scrollTop() > 250) {
         $(".header").addClass("fixed-header fade_down_effect");
      } else {
         $(".header").removeClass("fixed-header fade_down_effect");
      }
   });
   /*Rider Fixed  Header*/
   $(window).on("scroll", function () {
      if ($(window).scrollTop() > 250) {
         $(".header_2").addClass("fixed-header fade_down_effect");
      } else {
         $(".header_2").removeClass("fixed-header fade_down_effect");
      }
   });

   if ($(window).width() <= 991) {
      $(".main-menu li a").on("click", function () {
         $(this).parent("li").find(".dropdown-menu").slideToggle();
      });
   }
   $(".toggle-bar").on("click", function () {
      $(this).toggleClass("toggler-change");
   });

   /*==============================
   // common slider 
   ================================*/
   /*banner business*/
   const sliderType1 = $('.slider-type1');
   if (sliderType1.length) {
      sliderType1.owlCarousel({
         items: 1,
         loop: true,
         dots: false,
         nav: false,
         autoplay: true,
         autoplaySpeed: 1000,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         smartSpeed: 600,
      })
   }

   /*banner business*/
   const investorBanner = $('.banner-investor');
   if (investorBanner.length) {
      investorBanner.owlCarousel({
         items: 1,
         loop: true,
         dots: true,
         nav: false,
         autoplay: true,
         autoplaySpeed: 1000,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         smartSpeed: 600,
      });
   }

   /*gothi-ride-thumbs-slider*/
   const gothiRideThumbsSlider = $('.gothi-ride-thumbs-slider');
   if (gothiRideThumbsSlider.length) {
      gothiRideThumbsSlider.owlCarousel({
         items: 1,
         loop: true,
         dots: true,
         nav: false,
         autoplay: true,
         autoplaySpeed: 1000,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         smartSpeed: 600,
      })
   }

   /*==============================
   // category-slider 
   ================================*/
   const categorySlider = $(".category-slider");
   if (categorySlider.length) {
      categorySlider.owlCarousel({
         loop: true,
         dots: false,
         nav: true,
         navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
         ],
         autoplay: true,
         autoplaySpeed: 1000,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         smartSpeed: 600,
         margin: 0,
         responsiveClass: true,
         responsive: {
            0: {
               items: 2,
               nav: false,
            },
            600: {
               items: 3,
            },
            992: {
               items: 4,
            },
            1200: {
               items: 6,
            },
         }
      })
   }

   /*=============================
   // partner-slider 
   ==============================*/
   const partnerSlider = $('.partner-slider');
   if (partnerSlider.length) {
      partnerSlider.owlCarousel({
         loop: true,
         margin: 30,
         autoplay: true,
         autoplayTimeout: 2000,
         smartSpeed: 600,
         autoplayHoverPause: true,
         dots: false,
         nav: false,
         responsiveClass: true,
         responsive: {
            0: {
               items: 2,
            },
            600: {
               items: 2,
            },
            768: {
               items: 3,
            },
            992: {
               items: 4,
            },
            1200: {
               items: 6,
            },
         }
      })
   }

   /*=============================
   // overview-slider
   ==============================*/
   const overviewSlider = $('.overview-slider');
   if (overviewSlider.length) {
      overviewSlider.owlCarousel({
         loop: true,
         responsiveClass: true,
         nav: true,
         margin: 0,
         autoplay: false,
         autoplayTimeout: 4000,
         autoplayHoverPause: true,
         smartSpeed: 500,
         center: true,
         navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>',
         ],
         responsive: {
            0: {
               items: 1,
            },
            767: {
               items: 2,
            },
            800: {
               items: 2,
            },
            900: {
               items: 2,
            },
            1200: {
               items: 3,
            },
         }
      })

   }

   /*=============================
   // video pop up partner
   ===============================*/

   const videoPopUp = $('.play-btn')
   if (videoPopUp.length) {
      videoPopUp.magnificPopup({
         type: "iframe",
         iframe: {
            markup:
               '<div class="mfp-iframe-scaler">' +
               '<div class="mfp-close"></div>' +
               '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
               "</div>",
            patterns: {
               youtube: {
                  index: "youtube.com/",
                  id: "v=",
                  src: "https://www.youtube.com/embed/%id%?autoplay=1",
               },
               vimeo: {
                  index: "vimeo.com/",
                  id: "/",
                  src: "//player.vimeo.com/video/%id%?autoplay=1",
               },
               gmaps: {
                  index: "//maps.google.",
                  src: "%id%&output=embed",
               },
            },
            srcAction: "iframe_src",
         },
      })
   }


   /*===============================
   WOW Init
   ===============================*/
   new WOW().init();

   /*==============================
   //  Back to Top
   ===============================*/
   const gothiSelectForm = $('.gothi-select-form');
   if (gothiSelectForm.length) {
      gothiSelectForm.select2();
   }

   /*==============================
   //  Back to Top
   ===============================*/
   const backToTop = document.getElementById("back-to-top");
   window.onscroll = function () {
      scrollFunction();
   };
   function scrollFunction() {
      if (backToTop != null) {
         if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
         ) {
            backToTop.style.display = "block";
         } else {
            backToTop.style.display = "none";
         }
      }
   }
   if (backToTop != null) {
      backToTop.addEventListener("click", (e) => {
         e.preventDefault();
         document.body.scrollTop = 0; // For Safari
         document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      });
   }

})(jQuery);


