$(document).ready(function () {


    $('.lightbox').lightbox();

    $('.dropdown-toggle').dropdown();

    $("ul.gallery").carouFredSel({
                    prev: '#prev',
                    next: '#next',
                    mousewheel: true,
                    align: 'left'
                });

    if ( $.cookie("promo") == "hide" && $('body').hasClass('home') ) {
        $('.jumbotron > .container').hide();
        $('#hide-promo > span').addClass('up');
        $('#hide-promo > span').attr('title','show promo');
    }

    $('#hide-promo > span').click(function (e) {
        e.preventDefault();
        $('.jumbotron > .container').slideToggle();
           if ( $('#hide-promo > span').hasClass('up')) {
                 $.cookie("promo", null);
                 $('#hide-promo > span').removeClass('up');
                 $('#hide-promo > span').attr('title','hide promo');
           } else {
                 $.cookie("promo", "hide");
                 $('#hide-promo > span').addClass('up');
                 $('#hide-promo > span').attr('title','show promo');
           }
    });


    jQuery.fn.topLink = function (settings) {
        settings = jQuery.extend({
            min: 1,
            fadeSpeed: 200
        }, settings);
        return this.each(function () {
            //listen for scroll
            var el = $(this);
            el.hide(); //in case the user forgot
            $(window).scroll(function () {
                if ($(window).scrollTop() >= settings.min) {
                    el.fadeIn(settings.fadeSpeed);
                } else {
                    el.fadeOut(settings.fadeSpeed);
                }
            });
        });
    };

    //set the link
    $('#top-link').topLink({
        min: 300,
        fadeSpeed: 500
    });
    //smoothscroll
    $('#top-link').click(function (e) {
        e.preventDefault();
        $.scrollTo(0, 300);
    });

    $('.g-block').hover(function () {
        $(this).fadeTo(100, 1).animate({
            left: "0px",
            bottom: "220px"
        }, 500);
    }, function () {
        $(this).fadeTo(1000, 1).animate({
            left: "0px",
            bottom: "0px"
        }, 500);
    });

    $('.g-block').mouseleave(function () {
        $(this).stop();
    });
});
