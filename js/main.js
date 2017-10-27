$(document).ready(function(){
    
    $('.slider_active').owlCarousel({
    loop:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
    smartSpeed:2000,
    items:1,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
    $('.testimonoal-active').owlCarousel({
    loop:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
    smartSpeed:2000,
    items:1,
    animateOut: 'rotateInDownLeft',
    animateIn: 'zoomInRight',
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});