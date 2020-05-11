
// Get a reference to the database service
var database = firebase.database();
var collectionid = 'vxONoHUCkFSBVEevmt34'

function addCardData(cardID, introduction, action) {
    firebase.database().ref('cards/' + collectionid).set({
        cardID = cardID,
        introduction: introduction,
        action: action
    });
  }


var piratecard = document.getElementById("piratecard");


var starCountRef = firebase.database().ref('cards/' + cardID + '/starCount');

starCountRef.on('value', function(snapshot) {
    updateStarCount(piratecard, snapshot.val());
});



 //Read data once

return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
});

