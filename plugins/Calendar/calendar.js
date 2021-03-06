
const arrayOfDays = [24, 25, 26, 27, 28, 29, 30, 31];
const mm = 11;
const yyyy = 2021;

function generate_year_range(start, end) {
  var years = "";
  for (var year = start; year <= end; year++) {
      years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = document.getElementById("years");
var selectMonth = document.getElementById("months");


var createYear = generate_year_range(2021, 2030);
/** or
* createYear = generate_year_range( 1970, currentYear );
*/

document.getElementById("years").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var days = ["السبت", "الأحد", "الأثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];

var dayHeader = "<tr>";
for (day in days) {
  dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
}
dayHeader += "</tr>";

document.getElementById("thead-month").innerHTML = dayHeader;


monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);



function next() {
  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);

  highlightDays(arrayOfDays, mm, yyyy);
}

function showCalendar(month, year) {

  var firstDay = ( new Date( year, month ) ).getDay() +1;

  tbl = document.getElementById("calendar-body");

  
  tbl.innerHTML = "";

  
  // monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  var date = 1;
  for ( var i = 0; i < 6; i++ ) {
      var row = document.createElement("tr");

      for ( var j = 0; j < 7; j++ ) {
          if ( i === 0 && j < firstDay ) {
              cell = document.createElement( "td" );
              cellText = document.createTextNode("");
              cell.appendChild(cellText);
              row.appendChild(cell);
          } else if (date > daysInMonth(month, year)) {
              break;
          } else {
              cell = document.createElement("td");
              cell.setAttribute("data-date", date);
              cell.setAttribute("data-month", month + 1);
              cell.setAttribute("data-year", year);
              cell.setAttribute("data-month_name", months[month]);
              cell.className = "date-picker";
              cell.innerHTML = "<span>" + (date) + "</span>";

              // if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
              //     cell.className = "date-picker selected";
              // }
              row.appendChild(cell);
              date++;
          }


      }

      tbl.appendChild(row);
  }

}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}




highlightDays = function(arrayOfDays, mm, yyyy){
  debugger
  const list = document.getElementsByClassName('date-picker');
  
  for (let item of list) {
    
    const Currentdd =item.attributes[0].textContent
    const Currentmm =item.attributes[1].textContent
    const Currentyyyy =item.attributes[2].textContent

    const isDayInList = arrayOfDays.filter(element => element == Currentdd);
    

    if(isDayInList.length > 0 && Currentmm == mm && Currentyyyy == yyyy){
      
      item.className = "date-picker highlight-gray";
      // item.innerHTML = "<span class='highlight-gray'>" + value + "</span>"
      
    }

  }

}

highlightDays(arrayOfDays, mm, yyyy);


function generate_year_range2(start, end) {
  var years = "";
  for (var year = start; year <= end; year++) {
      years += "<a class='dropdown-item' href='#'>" + year + "</a>";
  }
  return years;
}
var createYear2 = generate_year_range2(2021, 2030);
// document.getElementById("year2").innerHTML = createYear2;


