var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

initMap();

$('#btn-find').click(function(){
  navigator.geolocation.getCurrentPosition(success, error, options);
});

function error(err){}

function success(pos){
  $('#lat').text(pos.coords.latitude);
  $('#lng').text(pos.coords.longitude);

  map.setCenter({lat: pos.coords.latitude, lng: pos.coords.longitude});
  map.setZoom(17);

  var m = new google.maps.Marker({map:map, position: {lat: pos.coords.latitude, lng: pos.coords.longitude}});

  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'location': {lat: pos.coords.latitude, lng: pos.coords.longitude}}, function(results, status){
    for(var i = 0; i < results.length; i++){
      $('#locations').append('<li>' + results[i].formatted_address + '</li>');
    }
  });
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

$('#btn-send').click(function(){
  var phone = $('#select-family').val();
  var address = $('#locations > li')[0].textContent;
  $.ajax({
    url: '/finder?proxy=true',
    method: 'post',
    dataType: 'json',
    data: {phone: phone, address: address},
    success: function(response){
    }
  });
});
