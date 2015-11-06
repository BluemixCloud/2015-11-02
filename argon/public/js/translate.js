$('#btn-translate').click(function(){
  var source = $('#txt-source').val();
  var box = $('#translation').text();

  $.ajax({
    url: '/translate?proxy=true',
    method: 'post',
    dataType: 'html',
    data: {source: source || box},
    success: function(response){
      $('#translation').text(response);
    }
  });
});

$('#btn-speak').click(function(){
  var translated = $('#translation').text();
  var url = 'http://ca-101-chyld-nodered.mybluemix.net/speak?source=' + translated;
  $('audio').attr('src', url);
});

$('#btn-question').click(function(){
  var source = $('#txt-question').val();
  $.ajax({
    url: '/question?proxy=true',
    method: 'post',
    dataType: 'html',
    data: {source: source},
    success: function(response){
      $('#translation').text(response);
    }
  });
});
