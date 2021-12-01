$(document).ready(function() {
 
    changePassword = function(){
        $('#changePassword').modal('toggle');

        setInterval(function(){
            location.href="../pages/profile.html";
        },3000);
    }
   
});