$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 3,
        // margin: 80,
        loop: true,
        responsive:{
            0:{
                items:3
            },
            550:{
                items:5
            },
            760:{
                item:0
            }
        }
    })
});

