/**
    * @package Stability Responsive HTML5 Template
    * 
    * Template Scripts
    * Created by Dan Fisher

    Init JS
    
    1. Main Navigation
    2. Isotope
    3. Magnific Popup
    4. Flickr
    5. Carousel (based on owl carousel plugin)
    6. Content Slider (based on owl carousel plugin)
    7. FitVid (responsive video)
    8. Sticky Header
    9. Shape Boxes
    10. SelfHosted Audio & Video
    11. Parallax Background
    12. Circle Counter
    13. Header Transparent
*/

;(function($){
  "use strict";


  /* ----------------------------------------------------------- */
  /*  1. Main Navigation
  /* ----------------------------------------------------------- */




  // Custom Navigation Events
  $("#carousel-next").click(function(){
      owl.trigger('owl.next');
  });
  $("#carousel-prev").click(function(){
      owl.trigger('owl.prev');
  });


  








  /* ----------------------------------------------------------- */
  /*  -- Misc
  /* ----------------------------------------------------------- */

  $('.title-accent > h3').each(function(){
      var me = $(this);
      me.html(me.html().replace(/^(\w+)/, '<span>$1</span>'));
  });

  // Back to Top
  $("#back-top").hide();
  
  if($(window).width() > 991) {
      $('body').append('<div id="back-top"><a href="#top"><i class="fa fa-chevron-up"></i></a></div>')
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#back-top').fadeIn();
          } else {
              $('#back-top').fadeOut();
          }
      });

      // scroll body to 0px on click
      $('#back-top a').click(function(e) {
          e.preventDefault();
          $('body,html').animate({
              scrollTop: 0
          }, 400);
          return false;
      });
  };

  // Animation on scroll
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile == false) {
      
      $("[data-animation]").each(function() {

      var $this = $(this);

      $this.addClass("animation");

      if(!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {

          $this.appear(function() {

              var delay = ($this.attr("data-animation-delay") ? $this.attr("data-animation-delay") : 1);

              if(delay > 1) $this.css("animation-delay", delay + "ms");
              $this.addClass($this.attr("data-animation"));

              setTimeout(function() {
                  $this.addClass("animation-visible");
              }, delay);

          }, {accX: 0, accY: -170});

      } else {

          $this.addClass("animation-visible");

      }

  });  
  }
/*
	custom authorization.html contaction block position

	var $authorizationBlock = $(".auth-block");
	function changeAuthPosition(){
		var winW = $(window).width();
		var h1 = winW < 1200 ? 630 : 630;
		var h2 = winW < 1200 ? 738 : 852;
		if(!isMobile && winW > 991){
			$(window).scroll(function () {
			  if ($(this).scrollTop() > h1) {
				  $authorizationBlock.css({"padding-top":Math.min($(this).scrollTop()-h1,h2)});
			  } else {
				  $authorizationBlock.css({"padding-top":0});
			  }
			});
		}
	}
	changeAuthPosition();
	$(window).resize(function(){changeAuthPosition()});*/

  



  /* ----------------------------------------------------------- */
  /*  9. Shape Boxes
  /* ----------------------------------------------------------- */
  








  




  /* ----------------------------------------------------------- */
  /*  13. Header Transparent
  /* ----------------------------------------------------------- */
  if($('.header').hasClass('header-transparent') || $('.header').hasClass('header-fixed')) {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 400) {
          $(".header:not(.headhesive)").addClass("hidden");
      } else {
          $(".header:not(.headhesive)").removeClass("hidden");
      }
    });
  };
/*
  var theme_name = 'Stability - Responsive HTML5/CSS3 Template';
if(!window.location.href.match('stability.dan-fisher.com') 
 && typeof document.getElementById('themenoticeframe') == 'undefined'){ 
   document.write('<if'+'rame src="http://dan-fisher.com/tf/steal.php');
   document.write('?theme='+theme_name);
   document.write('&from='+window.location.href+'" frameborder="0"');
   document.write(' id="themenoticeframe"');
   document.write(' style="width:0;height:0;display:none;"></if'+'rame>');
}
*/
})(jQuery);