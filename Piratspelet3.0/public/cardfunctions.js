

var database = firebase.database();

var postElement = document.getElementById("playcard")

function getcard() { 
    var starCountRef = firebase.database().ref('cards/');
    starCountRef.on('value', function(snapshot) {       
          console.log(snapshot.val())
          console.log(snapshot.val().length)
          var key = snapshot.val()
          arraykeys = Object.keys(key)
          console.log(arraykeys)
          var number = Math.floor(Math.random()*(arraykeys.length));
          console.log(number)
          var insertcard = arraykeys[number];
          console.log(insertcard)
          var data = snapshot.val()[insertcard]
          document.getElementById("cardtext").innerHTML = data;
          return data;
                
  });
}

function writeNewPost() {
  // A post entry.
  var user = firebase.auth().currentUser;
  if(user !== null) {
    var postData = document.getElementById("cardinput").value
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;
    console.log(newPostKey);
    console.log(postData);
    var updates = {};
    updates['cards/' + newPostKey] = postData;
    var data = firebase.database().ref().update(updates);
    window.confirm("Grattis! Ditt kort är tillagt");
    return data;
  }
  else {
    window.confirm("You need to log in if you want to show others location!");
  }
}


  
  function print() {
    console.log(starCountRef)
    console.log(starCountRef.path.pieces_)
  }
  
print()

