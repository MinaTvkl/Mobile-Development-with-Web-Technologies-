
function initMap() {
  
    map = new google.maps.Map(document.getElementById('googlemap'), {
        center: { lat: 59.3498092, lng: 18.0684758 },
        zoom: 15,
        styles:[{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#FFAD00"},{"saturation":50.2},{"lightness":-34.8},{"gamma":1}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#cbb42e"},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#FFC300"},{"saturation":54.2},{"lightness":-14.4},{"gamma":1}]},{"featureType":"road.highway","elementType":"all","stylers":[{"hue":"#FFAD00"},{"saturation":-19.8},{"lightness":-1.8},{"gamma":1}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"hue":"#FFAD00"},{"saturation":72.4},{"lightness":-32.6},{"gamma":1}]},{"featureType":"road.local","elementType":"all","stylers":[{"hue":"#FFAD00"},{"saturation":74.4},{"lightness":-18},{"gamma":1}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#00FFA6"},{"saturation":-63.2},{"lightness":38},{"gamma":1}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffe59c"}]}],

        disableDefaultUI: true //turns off default buttons
    });
    map.setTilt(45);
  var zoomInButton = document.getElementById('zoomInButton');
  var zoomOutButton = document.getElementById('zoomOutButton');
  var currentlocation = document.getElementById("currentLocation");

  
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
  
  }


  
  var elem = document.getElementById("myDiv")
  

  //kan användas för att ta sig ur en fullscreen


  function postMyLocation(){
    
    if(navigator.geolocation){
      let timestamp = new Date().toLocaleString();
      let position = navigator.geolocation.getCurrentPosition(getPosition);
      navigator.geolocation.getCurrentPosition(showPosition);
      addYourplaylistToDatabase(position, "test", "test", timestamp);
      
   } else{
      alert("Sorry, browser does not support geolocation!");
   }
  }

  function getOthersLocations(){
    let othersLocation = getOthersPlaylistsfromdatabase(limit = 5);
    othersLocation.forEach((person) =>{
      placeMarker(person.Location , "Minas fovvoställe");

    })
    
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

  function getPosition(position){
    position = { lat: position.coords.latitude, lng: position.coords.longitude };
    return position
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

  var database = firebase.database();

  function getOthersPlaylistsfromdatabase(limit = 5) {
    let locations = [];
    return database.ref("locations")
      .limitToLast(limit)
      .once("value")
      .then((snapshot) => {
        snapshot = snapshot.toJSON();
        Object.values(snapshot)
          .reverse()
          .forEach((doc) => {
            locations.push({
              Location: doc.Location,
              Text: doc.Text,
              User: doc.User,
              Timestamp:doc.Timestamp,
            });
          });
        return locations;
      });
  }

  //add a playlist to firebase
  function addYourplaylistToDatabase(location, text, user, timestamp) {
    database.ref("locations/" + user).set({
      Location: location,
      Text: text,
      User: user,
      Timestamp:timestamp,
    });
  }
  
  
  