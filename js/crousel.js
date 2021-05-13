//menu toggle button
$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $(".menu-toggle").toggleClass('active');
    });



$('#our-team').owlCarousel({
    rtl:true,
    loop:true,
    autoplay:true,
    responsiveClass:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3
        },
       
    }
})

});








