$(function () {
    "use strict";
    //Back to top starts
    var navoff = $(".main_menu").offset().top;
    // alert(navoff);
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navoff) {
            $(".main_menu").addClass("menu_fix");
        } else {
            $(".main_menu").removeClass("menu_fix");
        }
    });
    //Smooth scroll
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000, );
                return false;
            }
        }
    });
    // Bktop starts
    $(window).scroll(function () {
        var scrl = $(this).scrollTop();
        if (scrl > 200) {
            $("#bktop").fadeIn();
        } else {
            $("#bktop").fadeOut();
        }
    });
    $("#bktop").click(function () {
        $("body,html").animate({
            scrollTop: 0,
        }, 1000);
    });
    // banner slider
    $('#banner_part').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    // about video starts
    $(document).ready(function () {
        $('.veno_video').venobox();
    });

    // venobox gallery part starts
    $(document).ready(function () {
        $('.venobox_gal').venobox();
    });
    // test slider starts
    $('.test_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
        ]
    });
    // counter part starts
    $('.count_it').counterUp({
        delay: 10,
        time: 1000
    });
    // client part starts
    $('.client_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prev_arr"></i>',
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
        ]
    });
});