(function(c, q) {
    var m = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    c.fn.imagesLoaded = function(f) {
        function n() {
            var b = c(j),
                a = c(h);
            d && (h.length ? d.reject(e, b, a) : d.resolve(e));
            c.isFunction(f) && f.call(g, e, b, a)
        }

        function p(b) { k(b.target, "error" === b.type) }

        function k(b, a) {
            b.src === m || -1 !== c.inArray(b, l) || (l.push(b), a ? h.push(b) : j.push(b), c.data(b, "imagesLoaded", { isBroken: a, src: b.src }), r && d.notifyWith(c(b), [a, e, c(j), c(h)]), e.length === l.length && (setTimeout(n), e.unbind(".imagesLoaded",
                p)))
        }
        var g = this,
            d = c.isFunction(c.Deferred) ? c.Deferred() : 0,
            r = c.isFunction(d.notify),
            e = g.find("img").add(g.filter("img")),
            l = [],
            j = [],
            h = [];
        c.isPlainObject(f) && c.each(f, function(b, a) {
            if ("callback" === b) f = a;
            else if (d) d[b](a)
        });
        e.length ? e.bind("load.imagesLoaded error.imagesLoaded", p).each(function(b, a) {
                var d = a.src,
                    e = c.data(a, "imagesLoaded");
                if (e && e.src === d) k(a, e.isBroken);
                else if (a.complete && a.naturalWidth !== q) k(a, 0 === a.naturalWidth || 0 === a.naturalHeight);
                else if (a.readyState || a.complete) a.src = m, a.src = d
            }) :
            n();
        return d ? d.promise(g) : g
    }
})(jQuery);

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