$(document).ready(function() {
 
  var item = localStorage.getItem('tab');

  if(item ==="apply"){
    $( '.' + 'nav-tabs' + ' ' +'a[href="#' + 'apply' + '"]').tab('show');
  }
  
  localStorage.removeItem('tab');


  var count1 = 1, count2 = 1;
  appendItem = function(){
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

/****************************************Permit fees*******************************************/

//set event days 

setEventDays = function(e){
debugger

  //remove added rows
  var oldCols=$('.eventDaysCol');
  if(oldCols)
    $('.eventDaysCol').remove();

  var val = Number(e.value);

  var eventDays='';
  var daysString='';
  for (let i = 0; i < val; i++) {
    debugger
    
    if(i == 0)
      daysString ='الأول' ;
    else if(i == 1)
      daysString = 'الثاني'
    else if(i == 2)
      daysString = 'الثالث'
    else if(i == 3)
    daysString = 'الرابع'
    else if(i == 4)
      daysString = 'الخامس'
    else if(i == 5)
      daysString = 'السادس'
    else if(i == 6)
    daysString = 'السابع'
    
    
    eventDays +=`
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 eventDaysCol">
        
        <label> مدة الفاعلية في اليوم ` + daysString +`</label>
        <div class="row">

          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <input type="time" 
              class="form-control"id="appt" 
              min="09:00" max="18:00">

              <!-- <input type="text" 
                placeholder="من الساعة...صباحاً"
                onfocus="(this.type='time')"
                class="form-control"id="appt" name="appt"
                min="09:00" max="18:00">  -->    
          </div> 

          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <input type="time" 
              class="form-control"id="appt" 
              min="09:00" max="18:00">      
          </div>

        </div>
    </div>  
    `;
    
  }
    $(eventDays).insertAfter('#eventDaysCol');

}

//preview period

var previewPeriod= `
        <div class="col-lg-6 col-md-6 col-sm-6 col-12 previewPeriod" >
                            
        <label>مدة المعاينة</label>
        <div class="row">

          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <input type="time" 
              class="form-control"id="appt" 
              min="09:00" max="18:00">      
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <input type="time" 
              class="form-control"id="appt" 
              min="09:00" max="18:00">     
          </div>
          
        </div>
        
      </div>
    `;

setPreviewPeriod = function(e){
  debugger
  var val = Number(e.value);
  if(val == 1){
    $(previewPeriod).insertAfter($(e).parent("div").parent("div"));
  }else{
    //get parent and remove next div : parent: column next: column 
    $(e).parent("div").parent("div").next().remove();
  }
    
}


//preparin days
var preparingDays=`

    <div class="col-lg-6 col-md-6 col-sm-6 col-12 setPreparingDaysCol" id ="setPreparingDaysCol">
                        
      <label>عدد أيام التجهيزات</label>
      <div>
          <!-- AUTO COMPLETE DROPDOWN -->
          <select class="selectpicker form-control " onchange="setPreparingDaysPeriod(this)">
            <option class =" red"value="Ultrasound Knee Right" selected disabled>اختر من القائمة</option>
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
            <option value=6>6</option>
            <option value=7>7</option>
          </select>
      </div>
      
    </div>
`;
    
addPreparingDays = function(e){

  debugger
  var val = Number(e.value);
  if(val == 1){
    $(preparingDays).insertAfter($(e).parent("div").parent("div"));
  }else{
    //get parent and remove next div : parent: column next: column 
    $(e).parent("div").parent("div").next().remove();
  }
  
};



//set event days 

setPreparingDaysPeriod = function(e){
  debugger
  
    //remove added rows
    var oldCols=$('.preparingPeriodCol');
    if(oldCols)
      $('.preparingPeriodCol').remove();
  
    var val = Number(e.value);
  
    var preparingPeriod='';
    var daysString='';
    for (let i = 0; i < val; i++) {
      debugger
      
      if(i == 0)
        daysString ='الأول' ;
      else if(i == 1)
        daysString = 'الثاني'
      else if(i == 2)
        daysString = 'الثالث'
      else if(i == 3)
      daysString = 'الرابع'
      else if(i == 4)
        daysString = 'الخامس'
      else if(i == 5)
        daysString = 'السادس'
      else if(i == 6)
      daysString = 'السابع'
      
      
      preparingPeriod +=`
        <div class="col-lg-6 col-md-6 col-sm-6 col-12 preparingPeriodCol">
          
          <label> مدة الفاعلية في اليوم ` + daysString +`</label>
          <div class="row">
  
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <input type="time" 
                class="form-control"id="appt" 
                min="09:00" max="18:00">  
            </div>
  
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <input type="time" 
                class="form-control"id="appt" 
                min="09:00" max="18:00">      
            </div>
  
          </div>
      </div>  
      `;
      
    }
      $(preparingPeriod).insertAfter('#setPreparingDaysCol');
  
  }
    


/****************************************apply request*******************************************/

//set event days 
setEventDays2 = function(e){
  debugger
  
    //remove added rows
    var oldCols=$('.eventDays2');
    if(oldCols)
      $('.eventDaysCol2').remove();
  
    var val = Number(e.value);
  
    var eventDays='';
    var daysString='';
    for (let i = 0; i < val; i++) {
      debugger
      
      if(i == 0)
        daysString ='أول' ;
      else if(i == 1)
        daysString = 'ثاني'
      else if(i == 2)
        daysString = 'ثالث'
      else if(i == 3)
      daysString = 'رابع'
      else if(i == 4)
        daysString = 'خامس'
      else if(i == 5)
        daysString = 'سادس'
      else if(i == 6)
      daysString = 'سابع'
      
      
      eventDays +=`
        <div class="col-lg-6 col-md-6 col-sm-6 col-12 eventDaysCol2">
          <label>تاريخ `+ daysString +` أيام الفاعلية</label>
          <div class="input-group mb-3 ">
              <input class="form-control " id="visitDate"type="date" placeholder="" aria-label="date1" aria-describedby="button-addon2">
          </div> 
        </div> 

        <div class="col-lg-6 col-md-6 col-sm-6 col-12 eventDaysCol2">
          
        <label>مدة `+ daysString +` أيام الفاعلية</label>
          <div class="row">
  
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <input type="time" 
                class="form-control"id="appt" 
                min="09:00" max="18:00">  
            </div>
  
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <input type="time" 
                class="form-control"id="appt" 
                min="09:00" max="18:00">      
            </div>
  
          </div>
        </div> 

        
      `;
      
    }
      $(eventDays).insertAfter('#eventDaysCol2');
  
  }
  

  // preview period

  //work hours visit

var previewPeriod2= `
  <div class="col-lg-6 col-md-6 col-sm-6 col-12 previewPeriod">
    <label> تاريخ المعاينة</label>
    <div class="input-group mb-3 ">
        <input class="form-control " id="visitDate"type="date" placeholder="" aria-label="date1" aria-describedby="button-addon2">
    </div> 
  </div> 

  <div class="col-lg-6 col-md-6 col-sm-6 col-12 previewPeriod" >
                      
  <label>مدة المعاينة</label>
  <div class="row">

    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
      <input type="time" 
        class="form-control"id="appt" 
        min="09:00" max="18:00">      
    </div>

    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
      <input type="time" 
        class="form-control"id="appt" 
        min="09:00" max="18:00">      
    </div>
    
  </div>

  </div>
`;

setPreviewPeriod2 = function(e){
  debugger
  var val = Number(e.value);
  if(val == 1){
  $(previewPeriod2).insertAfter($(e).parent("div").parent("div"));
  }else{
  //get parent and remove next div : parent: column next: column 
  $(e).parent("div").parent("div").next().remove(); // remove date
  $(e).parent("div").parent("div").next().remove(); // then remove time
}

}


    //time
    // document.getElementById("apptt").value = "00:00:00"
    


    var client=`
        <div class="col-lg-6 col-md-6 col-sm-6 col-12 ssn" >
          <label>صورة من الرقم القومي</label>
          <div> 
            <label class="custom-file">
              <input type="file" class="custom-file-input" id="InputFile" aria-describedby="fileHelp">
              <label for="InputFile" id="file-lbl">
                إرفاق ملف
                <img src="../img/pages/private-visit-permit/icons/attach.svg" alt='attach' width="20" height="20">
              </label>
            </label>
          </div>

          <div class="form-check">
            <label>
              <input type="checkbox" name="checkbox" value="css" />
              <span></span>
            </label>

            <label class="form-check-label"> 
              اوافق علي 
              <a href="#!" onclick="activeTab('nav-tabs','terms')"> 
                الشروط والضوابط
              </a>
            </label>
          </div>

          
        </div>
    `;

    var compnay =`
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 co">
          <label>صورة من السجل التجاري</label>
          <div> 
            <label class="custom-file">
              <input type="file" class="custom-file-input" id="InputFile" aria-describedby="fileHelp">
              <label for="InputFile" id="file-lbl">
                إرفاق ملف
                <img src="../img/pages/private-visit-permit/icons/attach.svg" alt='attach' width="20" height="20">
              </label>
            </label>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-6 col-12 co">
          <label>صورة من االبطاقة الضريبية </label>
          <div> 
            <label class="custom-file">
              <input type="file" class="custom-file-input" id="InputFile" aria-describedby="fileHelp">
              <label for="InputFile" id="file-lbl">
                إرفاق ملف
                <img src="../img/pages/private-visit-permit/icons/attach.svg" alt='attach' width="20" height="20">
              </label>
            </label>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-6 col-12 co">
          <label>رخصة مزاولة المهنة</label>
          <div> 
            <label class="custom-file">
              <input type="file" class="custom-file-input" id="InputFile" aria-describedby="fileHelp">
              <label for="InputFile" id="file-lbl">
                إرفاق ملف
                <img src="../img/pages/private-visit-permit/icons/attach.svg" alt='attach' width="20" height="20">
              </label>
            </label>
          </div>
          
          <div class="form-check">
            <label>
              <input type="checkbox" name="checkbox" value="css" />
              <span></span>
            </label>

            <label class="form-check-label"> 
              اوافق علي 
              <a href="#!" onclick="activeTab('nav-tabs','terms')"> 
                الشروط والضوابط
              </a>
            </label>
          </div>

      </div>
    `; 
    selectCustomerType = function(e){

      let val = Number(e.value);

      if(val == 1){
        $(client).insertAfter('#customerTypeCol');
        $('.co').remove();
        // $('.ssn').addClass('showField');
        // $('.co').removeClass('showField');
      }else if(val == 2){
        $(compnay).insertAfter('#customerTypeCol');
        $('.ssn').remove();
        // $('.co').addClass('showField');
        // $('.ssn').removeClass('showField');
       
      }

    }
  });