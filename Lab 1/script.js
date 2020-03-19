function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 59.3498092, lng: 18.0684758 },
      zoom: 15,
      mapTypeId: 'satellite',
      disableDefaultUI: true //turns off default buttons
  });
  map.setTilt(45);
var zoomInButton = document.getElementById('zoomInButton');
var zoomOutButton = document.getElementById('zoomOutButton');
var currentlocation = document.getElementById("currentLocation");
var requestFullscreen = document.getElementById("goFS");

google.maps.event.addDomListener(zoomInButton, 'click', function() {
  map.setZoom(map.getZoom() + 1);
  //window.alert('Map was clicked!');
});
  
// Setup the click event listener - zoomOut
google.maps.event.addDomListener(zoomOutButton, 'click', function() {
  map.setZoom(map.getZoom() - 1);
});

google.maps.event.addDomListener(currentlocation, 'click', function() {
  getLocation();
  });

google.maps.event.addDomListener(requestFullscreen,"click", function() {
  if (document.fullscreenEnabled) {
    document.getElementById("map").requestFullscreen();
  console.log("något hände");
    // supported
    }
  else{
    alert("Sorry, browser does not support fullscreen!");
    }
  
  });
  

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
function showPosition(position){
  map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })
}

function getLocation(){
  if(navigator.geolocation){
    
    navigator.geolocation.getCurrentPosition(showPosition);
    
    
 } else{
    alert("Sorry, browser does not support geolocation!");
 }
}


