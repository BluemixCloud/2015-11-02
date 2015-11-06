$('#btn-send').click(function(){
  var phone = $('#txt-phone').val();
  var message = $('#txt-message').val();
  $.ajax({
    url: '/sms?proxy=true',
    method: 'post',
    dataType: 'json',
    data: {phone: phone, message: message},
    success: function(response){
      console.log('node sent me:', response);
    }
  });
});
