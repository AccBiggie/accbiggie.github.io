jQuery(document).ready(function ($) {
    //FIXAR O HEADER
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
        autoplay: true,
        autoplayTimeout: 6000,
        dots: true,
        lazyload: true,
        nav: false,
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



