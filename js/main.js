$(document).ready(function(){
    
    var carousel1 = $(".owl-carousel-1");
    var carousel2 = $(".owl-carousel-2");

    carousel1.owlCarousel({
        items:1,
        loop:true,
        autoplay:true
    });

    carousel2.owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:false,
        autoplay:true
    });

    $('.right').click(function() {
        carousel2.trigger('next.owl.carousel');
    })

    $('.left').click(function() {
        carousel2.trigger('prev.owl.carousel');
    })

    $('#res-button').click(function(){
        $(this).find('.fas').toggleClass("fa-bars fa-times");
        $('.menu').toggleClass("d-md-none d-none full-height");
        $('.res-bg-header').toggleClass('bg-black position-fixed');
        $('.menu').find('.nav-item').toggleClass('border-bottom py-3');
    });

  });