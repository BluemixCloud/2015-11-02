$('#btn-square').click(function(){
  var num = $('#txt-square').val();
  var square = num * num;
  $('#res-square').text(square);
});

$('#btn-add').click(function(){
  var x = $('#txt-x').val();
  var y = $('#txt-y').val();
  var sum = (x*1) + (y*1);
  $('#res-add').text(sum);
});
