function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 59.3498092, lng: 18.0684758 },
      zoom: 15,
      mapTypeId: 'satellite',
      disableDefaultUI: true //turns off default buttons
  });
  map.setTilt(45);
  var zoomInButton = document.getElementById('zoomInButton')
var zoomOutButton = document.getElementById('zoomOutButton')

google.maps.event.addDomListener(zoomInButton, 'click', function() {
  map.setZoom(map.getZoom() + 1);
  //window.alert('Map was clicked!');
});
  
// Setup the click event listener - zoomOut
google.maps.event.addDomListener(zoomOutButton, 'click', function() {
  map.setZoom(map.getZoom() - 1);
});

google.maps.event.addDomListener(zoomOutButton, 'click', function() {
  map.setZoom(map.getZoom() - 1);
  });

  var goFS = document.getElementById("goFS");
  google.maps.event.addDomListener(goFS,"click", function() {
  document.documentElement.requestFullscreen();

  }, false);
  

}

function favoriteLocation (id){
  if (id == "erik"){
  map.setCenter({ lat: 59.357025, lng: 18.040951 })
  }
  else if(id == "simon"){
    map.setCenter({ lat: 59.346371, lng: 18.061760 })
  }
  else if(id == "mina"){
    map.setCenter({ lat: 59.317291, lng: 18.060765 })
  }
}

function getLocation(){
  if(navigator.geolocation){
    // timeout at 60000 milliseconds (60 seconds)
    var options = {timeout:60000};
    navigator.geolocation.getCurrentPosition
    (showLocation, errorHandler, options);
 } else{
    alert("Sorry, browser does not support geolocation!");
 }
}


