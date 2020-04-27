
var map, lat, lng;

function displayCoordinates(pnt) {
      lat = pnt.lat();
      lat = lat.toFixed(4);
      lng = pnt.lng();
      lng = lng.toFixed(4);
}

window.onload = function() {

  var opt =
  {
      zoom: 15,
      center: new google.maps.LatLng(52.474536, -0.897781),
      mapTypeId: google.maps.MapTypeId.HYBRID
  }

  var map = new google.maps.Map(document.getElementById('map'),opt);
  var map2 = new google.maps.Map(document.getElementById('map2'),opt);

  google.maps.event.addListener(map, 'mousemove', function (event) {
      displayCoordinates(event.latLng);
  });
}
