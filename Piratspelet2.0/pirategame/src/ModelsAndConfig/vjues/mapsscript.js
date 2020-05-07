export function initMap() {
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
  
  export function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  var elem = document.getElementById("myDiv")
  
  export function fullscreenmap(){
    if (document.fullscreenEnabled) {
      elem.requestFullscreen();
      console.log("Du ska vara i fullscreen");
      // supported
      }
    else{
      alert("Sorry, browser does not support fullscreen!");
      }
  }
  
  //kan användas för att ta sig ur en fullscreen
  export function closeFullscreen(){
    document.exitFullscreen();
  }
  
  export function getOthersLocation (model){
    let locations = model.getOthersPlaylistsfromdatabase(10);
    locations.forEach(location => {
      
      placeMarker(location.Location , location.Text)
    });
  }
  
  export function showPosition(position){
    position = { lat: position.coords.latitude, lng: position.coords.longitude };
    map.setCenter(position)
    placeMarker(position , "Din position")
  }
  
  export function getLocation(){
    if(navigator.geolocation){
      
      return navigator.geolocation.getCurrentPosition(showPosition);
      
      
   } else{
      alert("Sorry, browser does not support geolocation!");
   }
  }
  
  export function placeMarker(location, text){
    
    let marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: location,
      map: map,
      title: text
    });
    marker.setMap(map);
  
  }