// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyA84Ze_Y2Yy0aoKI835N9Ss_8IthGt-53c",
  authDomain: "piratspelet-6afa4.firebaseapp.com",
  databaseURL: "https://piratspelet-6afa4.firebaseio.com",
  projectId: "piratspelet-6afa4",
  storageBucket: "piratspelet-6afa4.appspot.com",
  messagingSenderId: "826621460800",
  appId: "1:826621460800:web:5f6ae243fd28c504dfbaa5",
  measurementId: "G-CHDR97KN64"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  

  var starCountRef = firebase.database().ref('cards/' + collectionid + '/action');
  starCountRef.on('value', function(snapshot) {
      updateStarCount(piratecard, snapshot.val());
  });
  
  function print() {
  console.log(starCountRef)
  }
  
  print()
