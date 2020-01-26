;
(function($) {
    "use strict";

    $("#carousel-next").click(function() {
        owl.trigger('owl.next');
    });
    $("#carousel-prev").click(function() {
        owl.trigger('owl.prev');
    });


    $('.title-accent > h3').each(function() {
        var me = $(this);
        me.html(me.html().replace(/^(\w+)/, '<span>$1</span>'));
    });

    // Back to Top
    $("#back-top").hide();

    if ($(window).width() > 991) {
        $('body').append('<div id="back-top"><a href="#top"><i class="fa fa-chevron-up"></i></a></div>')
        $(window).scroll(function() {
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

            if (!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {

                $this.appear(function() {

                    var delay = ($this.attr("data-animation-delay") ? $this.attr("data-animation-delay") : 1);

                    if (delay > 1) $this.css("animation-delay", delay + "ms");
                    $this.addClass($this.attr("data-animation"));

                    setTimeout(function() {
                        $this.addClass("animation-visible");
                    }, delay);

                }, { accX: 0, accY: -170 });

            } else {

                $this.addClass("animation-visible");

            }

        });
    }

    if ($('.header').hasClass('header-transparent') || $('.header').hasClass('header-fixed')) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 400) {
                $(".header:not(.headhesive)").addClass("hidden");
            } else {
                $(".header:not(.headhesive)").removeClass("hidden");
            }
        });
    };

})(jQuery);