$(document).ready(function() {
 
  var item = localStorage.getItem('tab');

  if(item ==="apply"){
    $( '.' + 'nav-tabs' + ' ' +'a[href="#' + 'apply' + '"]').tab('show');
  }
  
  localStorage.removeItem('tab');


  var idCount = 3;
  appendRow = function(){
  debugger
    const element = `  
        <tr>
          <th scope="row">
            <p>نصريح القاهرة</p>
            <label class="site-red">تصريح جديد</label>
          </th>
          <td>
            <input type="number" class="number-control count-input" id="quantity` + idCount +`" name="quantity2" value ="1"   min="1" max="50">
          </td>
          <td>$0</td>
          <td>$0</td>
      </tr>`;

      var table = document.getElementById("permitTable");
   
      // Create an empty <tr> element and add it to the 3st position of the table:
      var row = table.insertRow(3).innerHTML = element;
      
      idCount++;
  }
 

    // //input file
    // $('.custom-file input').change(function (e) {
    //     var files = [];
    //     for (var i = 0; i < $(this)[0].files.length; i++) {
    //         files.push($(this)[0].files[i].name);
    //     }
    //     $(this).next('.custom-file-label').html(files.join(', '));
    // });

  });