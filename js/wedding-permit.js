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



//set event days
    var eventDays1=`
    
                            
    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                              
        <label>هل ترغب في المعاينة خارج مواعيد العمل؟</label>
        <div>
            <!-- AUTO COMPLETE DROPDOWN -->
            <select class="selectpicker form-control " onchange="setWorkHoursVisit(this)">
              <option class =" red"value="Ultrasound Knee Right" selected disabled>اختر من القائمة</option>
              <option value=1>نعم</option>
              <option value=2>لا</option>
            </select>
        </div>
      
    </div>

    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
      
      <label>مدة الفاعلية في اليوم الأول</label>
      <div class="row">

        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <!-- <input type="time" 
                class="form-control"id="appt" 
                min="09:00" max="18:00" 
                > -->
          <input type="text" 
                  placeholder="من الساعة...صباحاً"
                  onfocus="(this.type='time')"
                  class="form-control"id="appt" name="appt"
                  min="09:00" max="18:00">      
        </div>

        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <input type="text" 
            placeholder="إلي الساعة...مساءً"
            onfocus="(this.type='time')"
            class="form-control"id="appt" name="appt"
            min="09:00" max="18:00">      
        </div>

      </div>
  </div>  
`;


setEventDays = function(e){
debugger
var val = Number(e.value);

var eventDays='';
for (let i = 0; i < val; i++) {
  eventDays +=`
    
                            
    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                              
        <label>هل ترغب في المعاينة خارج مواعيد العمل؟</label>
        <div>
            <!-- AUTO COMPLETE DROPDOWN -->
            <select class="selectpicker form-control " onchange="setWorkHoursVisit(this)">
              <option class =" red"value="Ultrasound Knee Right" selected disabled>اختر من القائمة</option>
              <option value=1>نعم</option>
              <option value=2>لا</option>
            </select>
        </div>
      
    </div>

    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
      
      <label> مدة الفاعلية في اليوم الأول</label>
      <div class="row">

        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <!-- <input type="time" 
                class="form-control"id="appt" 
                min="09:00" max="18:00" 
                > -->
          <input type="text" 
                  placeholder="من الساعة...صباحاً"
                  onfocus="(this.type='time')"
                  class="form-control"id="appt" name="appt"
                  min="09:00" max="18:00">      
        </div>

        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <input type="text" 
            placeholder="إلي الساعة...مساءً"
            onfocus="(this.type='time')"
            class="form-control"id="appt" name="appt"
            min="09:00" max="18:00">      
        </div>

      </div>
  </div>  
`;

  
}
$(eventDays).insertAfter('#eventDaysCol');

eventDays = '';

}

//work hours visit

var preparePeriod= `
        <div class="col-lg-6 col-md-6 col-sm-6 col-12" id ="preparePeriodCol">
                            
        <label>مدة التجهيز قبل الفاعلية في اليوم الأول</label>
        <div class="row">

          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <input type="text" 
                    placeholder="من الساعة...صباحاً"
                    onfocus="(this.type='time')"
                    class="form-control"id="appt" name="appt"
                    min="09:00" max="18:00">      
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <input type="text" 
              placeholder="إلي الساعة...مساءً"
              onfocus="(this.type='time')"
              class="form-control"id="appt" name="appt"
              min="09:00" max="18:00">      
          </div>
          
        </div>
        
      </div>
    `;

    setWorkHoursVisit = function(e){
      debugger
      var val = Number(e.value);
      if(val == 1){
        $(preparePeriod).insertAfter($(e).parent("div").parent("div"));
      }else{
        //get parent and remove next div : parent: column next: column 
        $(e).parent("div").parent("div").next().remove();
      }
      
    }


    //preparin days
    var prepareDays=`
    
          <div class="col-lg-6 col-md-6 col-sm-6 col-12" id="preparingCol">
                            
            <label>هل ترغب في التجهيز قبل الفاعلية؟</label>
            <div>
                <select class="selectpicker form-control " id="preparingDays" onchange="setPreparingPeriod(this)">
                  <option class =" red"value="Ultrasound Knee Right" selected disabled>اختر من القائمة</option>
                  <option value=1>نعم</option>
                  <option value=2>لا</option>
                </select>
            </div>
          
          </div>
    `;

    var tempParapreDays = prepareDays;
    setPreparingDays = function(e){
      debugger
      var val = Number(e.value);
      for (let i = 1; i < val; i++) {
        prepareDays += prepareDays;
        $(prepareDays).insertAfter('#preparingDaysCol');
      }

      if(val == 1){
        $(prepareDays).insertAfter('#preparingDaysCol');
      }

      prepareDays = tempParapreDays;
    }


    //praparing perion
    var preparePeriod= `
        <div class="col-lg-6 col-md-6 col-sm-6 col-12" id ="preparePeriodCol">
                            
        <label>مدة التجهيز قبل الفاعلية في اليوم الأول</label>
        <div class="row">

          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <input type="text" 
                    placeholder="من الساعة...صباحاً"
                    onfocus="(this.type='time')"
                    class="form-control"id="appt" name="appt"
                    min="09:00" max="18:00">      
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <input type="text" 
              placeholder="إلي الساعة...مساءً"
              onfocus="(this.type='time')"
              class="form-control"id="appt" name="appt"
              min="09:00" max="18:00">      
          </div>
          
        </div>
        
      </div>
    `;

    setPreparingPeriod = function(e){
      debugger
      var val = Number(e.value);
      if(val == 1){
        $(preparePeriod).insertAfter($(e).parent("div").parent("div"));
      }else{
        //get parent and remove next div : parent: column next: column 
        $(e).parent("div").parent("div").next().remove();
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