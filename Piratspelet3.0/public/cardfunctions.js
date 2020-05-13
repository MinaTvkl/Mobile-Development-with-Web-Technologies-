
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


var piratecard = document.getElementById("playcard");


var starCountRef = firebase.database().ref('cards/' + collectionid + '/action');
starCountRef.on('value', function(snapshot) {
    updateStarCount(piratecard, snapshot.val());
});

function print() {
console.log(starCountRef)
}

print()


 //Read data once

return firebase.database().ref('/cards/' + collectionid).once('value').then(function(snapshot) {
  var card = (snapshot.val() && snapshot.val()) || 'Anonymous';
  console.log(card)
  return card;
});



