$('#btn-quote').click(function(){
  var symbol = $('#txt-symbol').val();
  var url = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
  $.getJSON(url, function(response){
    $('#result').text('$' + response.LastPrice);
  });
});
