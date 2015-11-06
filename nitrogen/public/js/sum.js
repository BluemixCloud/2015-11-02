$('#btn-numbers').click(function(){
  var nums = $('#txt-numbers').val();
  nums = nums.split(',');

  var total = 0;
  for(var i = 0; i < nums.length; i++){
    total = total + (nums[i] * 1);
    $('#output-list').append('<li>' + nums[i] + '</li>');
  }

  $('#output-sum').text(total);
  console.log(nums);
  console.log(total);
});
