Firebase.initializeApp(firebaseConfig);


function newcard() {
    var text = inputtext = document.getElementById("cardinput").innerHTML
    console.log(text)
    
    var postData = {
      text = text       
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('cards').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/cards/' + newPostKey] = postData;
    return firebase.database().ref().update(updates);
  }
  