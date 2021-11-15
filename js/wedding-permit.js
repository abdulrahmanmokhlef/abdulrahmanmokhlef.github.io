$(document).ready(function() {
 

  var count1 = 1, count2 = 1;
  appendItem = function(){
    debugger
    var element = `      
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 ">
        <label class="lbl1">البند</label>
        <div>
          <!-- AUTO COMPLETE DROPDOWN -->
          <select class="selectpicker form-control mb-0">
            <option value="Ultrasound Knee Right" selected disabled>اختر من القائمة</option>
            <option value="1">1 </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <label class="add-item" id="firstAddItemlbl` + count1 + `" onclick="appendItem()">
          + اضافة بند
         </label>

        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-12" id="firstItem` + count1 + `">

        <label class="lbl1">العدد</label>
        <div>
          <!-- AUTO COMPLETE DROPDOWN -->
          <select class="selectpicker form-control mb-0">
            <option value="Ultrasound Knee Right" selected disabled>اختر من القائمة</option>
            <option value="1">1 </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

      </div>`;             
        
    if(count1 === 1){
      //order is matter
      $(element).insertAfter('#firstItem') 
      $('#firstAddItemlbl').remove()
      $('.lbl1').removeClass('lbl1')  //this for first row only
    }  
    else{
      // order is matter
      $(element).insertAfter('#firstItem' + (count1 - 1)) 
      $('#firstAddItemlbl' + (count1 - 1)).remove();

      //this for first row only
      if(count1 > 1)
        $('.lbl1').addClass('mt-25')
      
    }

    
    count1++;
    // $("#formRow").append(element);      // Append the new elements
  }

    appendItem2 = function(){
      debugger
      var element = `
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                    
        <label class="lbl2">التغطية الإعلامية</label>
        <div>
          <!-- AUTO COMPLETE DROPDOWN -->
          <select class="selectpicker form-control mb-0">
            <option value="Ultrasound Knee Right" selected disabled>اختر من القائمة</option>
            <option value="1">1 </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <label class="add-item" id="secondAddItemlbl` + count2 + `" onclick="appendItem2()">
          + اضافة بند
         </label>

        </div>
        
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-12 mb-0" id="secondItem` + count2 + `">
        
        <label class="lbl2" >تفاصيل</label>
        <div class="input-group mb-3">
          <input class="form-control" type="text" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2">
        </div> 

      </div>`;              
      
      if(count2 === 1){
        //order is matter
        $(element).insertAfter('#secondItem') 
        $('#secondAddItemlbl').remove()
        $('.lbl2').addClass('mt-25')
      }  
    
      else{
        //order is matter
        $(element).insertAfter('#secondItem' + (count2 - 1)) 
        $('#secondAddItemlbl' + (count2 - 1)).remove();
        $('.lbl2').addClass('mt-25')
       

      }
       
      count2++;

    }

    // //this to keep active tab opened after reload 
    // $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
    //     localStorage.setItem('activeTab', $(e.target).attr('href'));
    // });
    // var activeTab = localStorage.getItem('activeTab');
    // if(activeTab){
    //     $('#privatePhotographyTab a[href="' + activeTab + '"]').tab('show');
    //     $('#privatePhotographyTab2 a[href="' + activeTab + '"]').tab('show');
    // }


    // //input file
    // $('.custom-file input').change(function (e) {
    //     var files = [];
    //     for (var i = 0; i < $(this)[0].files.length; i++) {
    //         files.push($(this)[0].files[i].name);
    //     }
    //     $(this).next('.custom-file-label').html(files.join(', '));
    // });

  });