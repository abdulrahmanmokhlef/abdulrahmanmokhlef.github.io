$(document).ready(function() {
 

   

  closeModal = function(id){
    debugger
    $('#' + id + '').modal('hide');
  };

  openModal = function(id){
    $('#' + id + '').modal('show');
  }

  back = function(){
    debugger
    closeModal('cancelRequest');
    $('#cancelRequest').on('hidden.bs.modal', function (e) {
      // Load up a new modal...
      debugger
      $('#requestCancelled').modal('hide');
    })
  }

  cancelRequest = function(){
    closeModal('cancelRequest');
    openModal('requestCancelled');

    // $('#cancelRequest').on('hidden.bs.modal', function (e) {
    //   // Load up a new modal...
    //   $('#requestCancelled').modal('show')
    // })
    // setInterval(function(){
    //   // location.href="../index.html"
    // },3000);
  }

  
  deleteNotification = function(){
    closeModal('deleteNofification');
    openModal('notificationDeleted');
    // setInterval(function(){
    //   // location.href="../index.html"
    // },3000);
  }




});