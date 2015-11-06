$('#btn-image').click(function(){
  var url = $('#txt-image').val();
  $('#photo').attr('src', url);

  $.ajax({
    url: '/image?proxy=true',
    method: 'post',
    dataType: 'json',
    data: {url: url},
    success: function(results){
      for(var i = 0; i < results.length; i++){
        $('#statistics').append('<li>' + results[i].label_name + ' : ' + results[i].label_score + '</li>');
      }
    }
  });
});
