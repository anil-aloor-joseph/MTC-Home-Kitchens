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
        dots:false
    });

    $('.right').click(function() {
        carousel2.trigger('next.owl.carousel');
    })

    $('.left').click(function() {
        carousel2.trigger('prev.owl.carousel');
    })
  });