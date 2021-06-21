$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            700:{
                items:2
            },
            900:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});

$(window).scroll(function () {
    if($(window).scrollTop()) {
        $(".navbar").addClass("putih")
    }
    else {
        $(".navbar").removeClass("putih")
    }
});