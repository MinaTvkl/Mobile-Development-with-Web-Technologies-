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


var collectionid = 'vxONoHUCkFSBVEevmt34'

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var postElement = document.getElementById("playcard") 


function getcard() { 
    var starCountRef = firebase.database().ref('cards/');
    starCountRef.on('value', function(snapshot) {
        var list = []
        console.log(snapshot.val().length)
        var number = Math.floor(Math.random()*(snapshot.val().length));
        console.log(number);
        var insertcard = snapshot.val()[number];
        var data = snapshot.val()
        document.getElementById("cardtext").innerHTML = insertcard;
        return data.action;
                
  });
}


  
  function print() {
    console.log(starCountRef)
    console.log(starCountRef.path.pieces_)
  }
  
print()


function writeUserData(cardtext, id) {
    firebase.database().ref('cards/' + id + "/" + cardtext).set({
    cardtext: cardtext,
    });
  }


  writeUserData("En skeppsbruten pirat ligger och guppar i det stora blå och först efter ni fiskat upp denne så inser ni att ni fallit offer för den patetiska poeten. Poeten ligger på däck och mumlar ut sin kommersiella smörja ”Uti havet det blå är vi alla små och då kan närmsta tå förstå en skogsrå Efter många om och men så utmanar han besättningen på rimtävling på valfritt ord som du bestämmer. Första personen som misslyckas eller tvekar en ansenlig stund får ta sig en djup titt i bägaren och dricka tre klunkar.")

  writeUserData("hej", "h")



  function writeNewPost(uid, username, picture, title, body) {
    // A post entry.
    var postData = {
      author: username,
      uid: uid,
      body: body,
      title: title,
      starCount: 0,
      authorPic: picture
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }