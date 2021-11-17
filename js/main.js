$(document).ready(function() {
 
 
    // $('.owl-carousel').owlCarousel({
    //     margin: 10,
    //     loop:true,
    //     nav: true,
    //     rtl:true,
    //     dots:false,
    //     navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:4
    //         },
    //         1000:{
    //             items:4
    //         }
    //     }
    // })


    //avtive tab buy tab id
    //navTabClass ex: nav-tab
    activeTab = function(navTabClass,tab){
        debugger
        $( '.' + navTabClass + ' ' +'a[href="#' + tab + '"]').tab('show');
    };

    activeTabInSpecificPage = function(tab, page){
        debugger
        localStorage.setItem('tab', tab);
        window.location.replace('../pages/' + page);
    };

    //todo this block of code is temporary commented
    //this to keep active tab opened after reload 
    // $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
    //     localStorage.setItem('activeTab', $(e.target).attr('href'));
    // });
    // var activeTab = localStorage.getItem('activeTab');
    // if(activeTab){
    //     $('#myTab a[href="' + activeTab + '"]').tab('show');
    //     $('#myTab2 a[href="' + activeTab + '"]').tab('show');
    // }


    //input file
    $('.custom-file input').change(function (e) {
        var files = [];
        for (var i = 0; i < $(this)[0].files.length; i++) {
            files.push($(this)[0].files[i].name);
        }
        $(this).next('.custom-file-label').html(files.join(', '));
    });

    
  });