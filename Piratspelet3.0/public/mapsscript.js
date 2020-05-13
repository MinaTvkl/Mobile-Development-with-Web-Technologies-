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



google.maps.event.addDomListener(zoomInButton, 'click', function() {
  map.setZoom(map.getZoom() + 1);
  //window.alert('Map was clicked!');
});
  
// Setup the click event listener - zoomOut
google.maps.event.addDomListener(zoomOutButton, 'click', function() {
  map.setZoom(map.getZoom() - 1);
});

 

}




var elem = document.getElementById("myDiv")


//kan användas för att ta sig ur en fullscreen


function placeMarker(location, textto, user="You", type="me", timestamp="Now"){
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
      text: user + " - Berättar: " + textto + " - Och satt på denna position: "+ timestamp,
      
      
      fontSize: "16px"
    }
  });
  marker.addListener('click', function() {
    
    map.setCenter(marker.getPosition());
  });

  marker.setMap(map);

}
function getOthersLocations(){
  var user = firebase.auth().currentUser;
  if(user !== null){
    getOthersPlaylistsfromdatabase(limit = 5, user.uid).then((othersLocation)=>{
      othersLocation.forEach((person) =>{
      placeMarker(person.Location , person.Text, person.Name, "other", person.Timestamp);
  
    });
    });

  }else{
    alert("You need to log in if you want to show others location!");

  }

  
  
}



function getOthersPlaylistsfromdatabase(limit = 5, currentUserUid) {
  let database = firebase.database();
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
          if(doc.Uid!== currentUserUid)
          locations.push({
            Location: location,
            Text: doc.Text,
            User: doc.User,
            Name: doc.Name,
            Uid: doc.Uid,
            Timestamp:doc.Timestamp,
          });
        });
      
    }).then(() => {

      // Where you put filters
      //locationsfiltered = locations.filter((location) => { (new Date(location.Timestamp).getTime() - new Date("01:00:00")) < (new Date(new Date().toLocaleString()).getTime() - new Date("01:00:00"))})
      locationsfiltered = locations;
      return locationsfiltered});

}

function showPosition(position, text, name, email, uid){
  
  position = { lat: position.coords.latitude, lng: position.coords.longitude };
  let timestamp = new Date().toLocaleString();
  var locationstr = JSON.stringify(position);
  placeMarker(position , text, "Du", "me", timestamp);
  
  addYourLocationToDatabase(locationstr, text, name, email, uid, timestamp);
  
}

function getLocation(text, name, email, uid){
  if(navigator.geolocation){
    
  navigator.geolocation.getCurrentPosition( (position) => showPosition(position, text, name, email, uid));
    
    
 } else{
    alert("Sorry, browser does not support geolocation!");
 }
}


function postMyLocation(){
  
  var text = "test";
  text = document.getElementById("messageForLocation").value;
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, i                 // you have one. Use User.getToken() instead.
  getLocation(text, name, email, uid);
  return false;
}else {
  alert("You need to log in if you want to share your location");
  return false;
}

}


function addYourLocationToDatabase(location, text, user, name, uid, timestamp) {
  let database = firebase.database();
  database.ref("locations/"+ uid).set({
    Location: location,
    Text: text,
    User: user,
    Name: name,
    Uid: uid,
    Timestamp:timestamp,
  });
}