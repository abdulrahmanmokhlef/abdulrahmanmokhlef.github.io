$(document).ready(function() {
 
  waiverFunc = function(){
    debugger
    $('#waiverModal').modal('toggle');

    setInterval(function(){
      activeTabInSpecificPage('sites', 'profile.html')
    },3000);
  }

  activeTabInSpecificPage = function(tab, page){
    localStorage.setItem('tab', tab);
    window.location.replace('../pages/' + page);
  };

  var count1 = 1, count2 = 1;
  appendItem = function(){
    var element = `      
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 ">

        <label>البند</label>
        <div class="input-icons">
          <img src="../img/pages/profile/icons/pen.png" onclick="editInput(this)">
          <input 
            class="form-control input-field disabled-input mb-0" 
            type="text" value=""
            name="companyName" 
            disabled>
        </div> 
        <label class="add-item" id="firstAddItemlbl` + count1 + `" onclick="appendItem()">
          + اضافة بند
        </label>

      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-12" id="firstItem` + count1 + `">

        <label> العدد</label>
        <div class="input-icons">
          <img src="../img/pages/profile/icons/pen.png" onclick="editInput(this)">
          <input 
            class="form-control input-field disabled-input" 
            type="text" value="1"
            name="companyName" 
            disabled>
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

});