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
  fullscreenmap();
  });
  

}

function fullscreenmap(){
  if (document.fullscreenEnabled) {
    document.getElementById("myDiv").requestFullscreen();
    console.log("Du ska vara i fullscreen");
    // supported
    }
  else{
    alert("Sorry, browser does not support fullscreen!");
    }
}
//kan användas för att ta sig ur en fullscreen
function exitfullscreen(){
  document.exitFullscreen();
}

function favoriteLocation (id){
  
  if (id == "erik"){
    let position = { lat: 59.357025, lng: 18.040951 }
    map.setCenter(position)
    placeMarker(position , "Eriks fovvoställe")
  }
  else if(id == "simon"){
    let position = { lat: 59.346371, lng: 18.061760 }
    map.setCenter(position)
    placeMarker(position , "Simon fovvoställe")
  }
  else if(id == "mina"){
    let position = { lat: 59.317291, lng: 18.060765 };
    map.setCenter(position); 
    placeMarker(position , "Minas fovvoställe")
  }
}
function showPosition(position){
  position = { lat: position.coords.latitude, lng: position.coords.longitude };
  map.setCenter(position)
  placeMarker(position , "Din position")
}

function getLocation(){
  if(navigator.geolocation){
    
    navigator.geolocation.getCurrentPosition(showPosition);
    
    
 } else{
    alert("Sorry, browser does not support geolocation!");
 }
}

function placeMarker(location, text){
  
  let marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    position: location,
    map: map,
    title: text
  });
  marker.setMap(map);

}


