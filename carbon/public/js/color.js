$('#btn-color').click(function(){
  var color = $('#color').val();
  $('body').css('background-color', color);
});

$('#btn-random').click(function(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var alpha = Math.random();
  $('body').css('background-color', 'rgba('+red+','+green+','+blue+','+alpha+')');
});
