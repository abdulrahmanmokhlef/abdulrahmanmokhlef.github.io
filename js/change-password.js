$(document).ready(function() {
 
    changePassword = function(){
        $('#changePassword').modal('toggle');

        setInterval(function(){
            localStorage.setItem('showLogin', 1);
            location.href="../index.html";
        },3000);
    }
   
});