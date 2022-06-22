
  jQuery(document).ready(function ($) {   
    window.onscroll = function () {
           if (window.pageYOffset > 100) {
               $('#botaoCima').addClass("active");
           } else {
               $('#botaoCima').removeClass("active");
           }
        }
       });