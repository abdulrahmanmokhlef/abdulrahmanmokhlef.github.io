$(document).ready(function() {
 
  //redirect to login after change password
  var login = localStorage.getItem('showLogin');
  if(login =="1"){
    $('#loginModal').modal('toggle');
    localStorage.removeItem('showLogin');
  }

  //cahnge language
  var showLang= false;
  selectLang = function(){
    debugger
    showLang = !showLang;
    if(showLang){

      // $('#language').addClass('language');
      // $('#language > .ar , #language > .en , #language > .pipe').addClass('showElement');

      document.getElementsByClassName('s').className = 'lang-tansition'
      // $('#language > .ar , #language > .en , #language > .pipe').className =('lang-tansition');
    }else{

      // $('#language').removeClass('language');
      // $('#language > .ar , #language > .en , #language > .pipe').removeClass('showElement');
      
      $('#language > .ar , #language > .en , #language > .pipe').addClass('lang-tansition');

    }
    

  }
  
  //show/hide and set new value for cart
  var currentCount = localStorage.getItem('itemsIncart');
  if(currentCount > 0){
    $('#lblCartCount').addClass('showCart');
    $("#lblCartCount").text(Number(currentCount));
  }

  //this function for input that has edit icon inside
  editInput = function(e){
    $(e).next("input").eq(0).prop('disabled', false);
    $(e).next("input").removeClass('disabled-input');
  }
  
  clearInputs = function(e){
      $(e).closest('form').find("input[type=text], input[type=password],textarea").val("");
      $(e).closest('form').find("input[type=text], input[type=password],textarea").prop('disabled', true);
      $(e).closest('form').find("input[type=text], input[type=password],textarea").addClass('disabled-input');
  }

  //avtive tab by tab id
  //navTabClass ex: nav-tab
  activeTab = function(navTabClass,tab){
      $( '.' + navTabClass + ' ' +'a[href="#' + tab + '"]').tab('show');
  };

  activeTabInSpecificPage = function(tab, page){
      localStorage.setItem('tab', tab);
    debugger
      var url = document.URL;

      if(url.includes('pages')){
        window.location.replace('../pages/' + page);
      }else{
        window.location.replace('./pages/' + page);
      }
  };


  //style main nav tabs
  $('.nav-tabs > .tab-item').click(function(){
    
    $('.nav-tabs > .tab-item').removeClass('active');
    $('nav-tabs > tab-item >.tab-link').removeClass('active');
    $(this).addClass('active');
  });



    
  closeModal = function(id){
      $('#' + id + '').modal('toggle');
  };
  
  openModal = function(id){
    $('#' + id + '').modal('toggle');
  }



    
    /*Date select*/
    function generateArrayOfYears(from) {
        var max = new Date().getFullYear()
        // var min = max - 50
        var min = from
        var years = []
      
        for (var i = max; i >= min; i--) {
          years.push(i)
        }
        return years
      }
      
      var years = generateArrayOfYears(1970);
      var months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
                  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
      var days=[01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    
      //append values for birth day fields
      years.forEach((y,index) =>{
        $('#year').append('<option value="' + y + '">' + y + '</option');
      });
    
      months.forEach((m,index) =>{
        $('#month').append('<option value="' + (index + 1) + '">' + m + '</option');
      });
    
      days.forEach((d,index) =>{
        $('#day').append('<option value="' + (index + 1) + '">' + d + '</option');
      });


      //append values for cvv 
      years.forEach((y,index) =>{
        $('#cvvYear').append('<option value="' + y + '">' + y + '</option');
      });
    
      months.forEach((m,index) =>{
        $('#cvvMonth').append('<option value="' + (index + 1) + '">' + m + '</option');
      });
    

    //   $('.accordion-toggle').on('click', function(event){
    //     event.preventDefault();
    //     // create accordion variables
    //     var accordion = $(this);
    //     var accordionContent = accordion.next('.accordion-content');

    //     // toggle accordion link open class
    //     accordion.toggleClass("open");
    //     // toggle accordion content
    //     accordionContent.slideToggle(250);

    // });

      // $('.accordion-toggle').on('click', function(e) { 
      //   debugger
      //   if ($(this).hasClass('collapsed')) { 
      //     debugger
      //     // e.stopPropagation(); 
      //     $('#accordion .collapse').collapse(true)
      //     $(this).collapse(false);
      //   } 
      // });

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