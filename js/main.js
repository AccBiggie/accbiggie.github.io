
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
        autoplayHoverPause:true,
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
//Botao Cima

var botao = $('#botaoCima');
$(window).scroll(function() {
    if($(window).scrollTop() > 300){
        botao.addClass('active');
    } else {
        botao.removeClass('active')
    }
});

botao.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '100');
});