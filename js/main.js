$(document).ready(function() {
 

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
      window.location.replace('../pages/' + page);
  };


  //style main nav tabs
  $('.tab-item').click(function(){
    debugger
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