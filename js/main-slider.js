$(document).ready(function() {
 
    //مواقع اثرية
    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop:true,
        nav: true,
        rtl:true,
        dots:false,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })

    
  });