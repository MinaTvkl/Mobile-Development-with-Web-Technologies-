Firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var postElement = document.getElementById("playcard")



function getcard() { 
    var starCountRef = firebase.database().ref('cards/');
    starCountRef.on('value', function(snapshot) {
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

