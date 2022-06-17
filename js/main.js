//FIXAR O HEADER
jQuery(document).ready(function ($) {
    window.onscroll = function () {
        if (window.pageYOffset > 140) {
            $('#header').addClass("active");
        } else {
            $('#header').removeClass("active");
        }
    }
    //Slider Depoimento
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: false,
        autoplayTimeout: 6000,
        dots: true,
        lazyload: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            }
        }
    });
});

