
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

  
  function placeMarker(location, textto, user="you", type="me"){
    let dot = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    if(type === "other"){
      dot =  "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    }

    
    let marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: location,
      icon: {
        url: dot
      },
      map: map,
      title: user ,
      label: {
        text: textto,
        
        fontWeight: "bold",
        fontSize: "16px"
      }
    });
    marker.addListener('click', function() {
      
      map.setCenter(marker.getPosition());
    });

    marker.setMap(map);
  
  }
  function getOthersLocations(){
    getOthersPlaylistsfromdatabase(limit = 5).then((othersLocation)=>{
      console.log(othersLocation);
      othersLocation.forEach((person) =>{
      placeMarker(person.Location , person.Text, person.User, "other");

    });
    });
    
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
            let location = JSON.parse(doc.Location);
            locations.push({
              Location: location,
              Text: doc.Text,
              User: doc.User,
              Timestamp:doc.Timestamp,
            });
          });
        
      }).then(() => {
        // Where you put filters
        //locationsfiltered = locations.filter((location) => { (new Date(location.Timestamp).getTime() - new Date("01:00:00")) < (new Date(new Date().toLocaleString()).getTime() - new Date("01:00:00"))})
        locationsfiltered = locations;
        return locationsfiltered});

  }

  function showPosition(position, text){
    position = { lat: position.coords.latitude, lng: position.coords.longitude };
    console.log(position);
    placeMarker(position , "You");
    console.log(position);
    let timestamp = new Date().toLocaleString();
    var locationstr = JSON.stringify(position);
    console.log(position);
    addYourplaylistToDatabase(locationstr, text, "test", timestamp);
    
  }

  function getLocation(text){
    if(navigator.geolocation){
      
    navigator.geolocation.getCurrentPosition( (position) => showPosition(position, text));
      
      
   } else{
      alert("Sorry, browser does not support geolocation!");
   }
  }
  

  function postMyLocation(text ="no text"){
    getLocation(text);

}

  //add a playlist to firebase
  function addYourplaylistToDatabase(location, text, user, timestamp) {
    database.ref("locations/"+ user).set({
      Location: location,
      Text: text,
      User: user,
      Timestamp:timestamp,
    });
  }
  
  
  