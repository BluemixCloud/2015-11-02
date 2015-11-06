$('#btn-multiply').click(function(){
  var nums1 = $('#txt-numbers1').val();
  var nums2 = $('#txt-numbers2').val();
  nums1 = nums1.split(',');
  nums2 = nums2.split(',');

  for(var i = 0; i < nums1.length; i++){
    var product = nums1[i] * nums2[i];
    $('#ul-multiply').append('<li>'+nums1[i]+'*'+nums2[i]+'='+product+'</li>');
  }
});

$('#btn-power').click(function(){
  var nums1 = $('#txt-numbers1').val();
  var nums2 = $('#txt-numbers2').val();
  nums1 = nums1.split(',');
  nums2 = nums2.split(',');

  for(var i = 0; i < nums1.length; i++){
    var result = Math.pow(nums1[i], nums2[i]);
    $('#ul-power').append('<li>'+nums1[i]+'^'+nums2[i]+'='+result+'</li>');
  }
});
