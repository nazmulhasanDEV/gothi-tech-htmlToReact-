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

   // Fixed header
   $(window).on("scroll", function () {
      if ($(window).scrollTop() > 250) {
         $(".header").addClass("fixed-header fade_down_effect");
      } else {
         $(".header").removeClass("fixed-header fade_down_effect");
      }
   });

   // Fixed  Header2
   $(window).on("scroll", function () {
      if ($(window).scrollTop() > 250) {
         $(".header_2").addClass("fixed-header fade_down_effect");
      } else {
         $(".header_2").removeClass("fixed-header fade_down_effect");
      }
   });

   // Mobile menu drop
   if ($(window).width() <= 991) {
      $(".main-menu li a").on("click", function () {
         $(this).parent("li").find(".dropdown-menu").slideToggle();
      });
   }

   //Amimated  Toggle bar
   $(".toggle-bar").on("click", function () {
      $(this).toggleClass("toggler-change");
   });

   /*==============================
   // Gothi Owl carousel 
   ================================*/

   $(".gothi-owl-carousel").each(function () {
      var owlCarousel = $(this),
         loop = owlCarousel.data("loop"),
         items = owlCarousel.data("items"),
         margin = owlCarousel.data("margin"),
         autoplay = owlCarousel.data("autoplay"),
         autoplayTimeout = owlCarousel.data("autoplay-timeout"),
         smartSpeed = owlCarousel.data("smart-speed"),
         dots = owlCarousel.data("dots"),
         nav = owlCarousel.data("nav"),
         navSpeed = owlCarousel.data("nav-speed"),
         xsDevice = owlCarousel.data("mobile-device"),
         xsDeviceNav = owlCarousel.data("mobile-device-nav"),
         xsDeviceDots = owlCarousel.data("mobile-device-dots"),
         smDevice = owlCarousel.data("sm-device"),
         smDeviceNav = owlCarousel.data("sm-device-nav"),
         smDeviceDots = owlCarousel.data("sm-device-dots"),
         smDevice2 = owlCarousel.data("sm-device2"),
         smDevice2Nav = owlCarousel.data("sm-device2-nav"),
         smDevice2Dots = owlCarousel.data("sm-device2-dots"),
         mdDevice = owlCarousel.data("md-device"),
         mdDeviceNav = owlCarousel.data("md-device-nav"),
         mdDeviceDots = owlCarousel.data("md-device-dots"),
         lgDevice = owlCarousel.data("lg-device"),
         lgDeviceNav = owlCarousel.data("lg-device-nav"),
         lgDeviceDots = owlCarousel.data("lg-device-dots"),
         centerMode = owlCarousel.data("center-mode"),
         HoverPause = owlCarousel.data("hoverpause");

      owlCarousel.owlCarousel({
         loop: loop ? true : false,
         items: items ? items : 4,
         lazyLoad: true,
         center: centerMode ? true : false,
         autoplayHoverPause: HoverPause ? true : false,
         margin: margin ? margin : 0,
         autoplay: autoplay ? true : false,
         autoplayTimeout: autoplayTimeout ? autoplayTimeout : 1000,
         smartSpeed: smartSpeed ? smartSpeed : 250,
         dots: dots ? true : false,
         nav: nav ? true : false,
         navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
         ],
         navSpeed: navSpeed ? true : false,
         responsiveClass: true,
         responsive: {
            0: {
               items: xsDevice ? xsDevice : 1,
               nav: xsDeviceNav ? true : false,
               dots: xsDeviceDots ? true : false,
               center: false,
            },
            576: {
               items: smDevice2 ? smDevice2 : 2,
               nav: smDevice2Nav ? true : false,
               dots: smDevice2Dots ? true : false,
               center: false,
            },
            768: {
               items: smDevice ? smDevice : 3,
               nav: smDeviceNav ? true : false,
               dots: smDeviceDots ? true : false,
               center: false,
            },
            992: {
               items: mdDevice ? mdDevice : 4,
               nav: mdDeviceNav ? true : false,
               dots: mdDeviceDots ? true : false,
            },
            1200: {
               items: lgDevice ? lgDevice : 4,
               nav: lgDeviceNav ? true : false,
               dots: lgDeviceDots ? true : false,
            },
         },
      });
   });

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
   //  Select form
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


