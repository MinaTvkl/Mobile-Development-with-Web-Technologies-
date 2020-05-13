

  function sendMessage() {
    var user = firebase.auth().currentUser;
    if(user !== null){
    // get message
    var message = document.getElementById("message").value;

    // save in database
    firebase.database().ref("messages").push().set({
      "sender": user.displayName,
      "message": message
    });

    // prevent form from submitting
    return false;
  }
  else{
    alert("Du måste vara inloggad för att kunna skicka meddelanden!");
    return false;
  }
  }

  
  // listen for incoming messages
  firebase.database().ref("messages").on("child_added", function (snapshot) {
    var html = "";
    // give each message a unique ID
    let user = firebase.auth().currentUser;
  if(user === null){
    user = "blaj";
  };
    html += "<li id='message-" + snapshot.key + "'>";
    // show delete button if message is sent by me
    if (snapshot.val().sender == user.displayName) {
      html += "<button data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>";
      html += "Ta bort";
      html += "</button>";
    }
    html += snapshot.val().sender + ": " + snapshot.val().message;
    html += "</li>";

    document.getElementById("messages").innerHTML += html;
  });


  // attach listener for delete message
  firebase.database().ref("messages").on("child_removed", function (snapshot) {
    // remove message node
    document.getElementById("message-" + snapshot.key).innerHTML = "This message has been removed";
  });

  function deleteMessage(self) {
    // get message ID
    var messageId = self.getAttribute("data-id");

    // delete message
    firebase.database().ref("messages").child(messageId).remove();
  }

  // attach listener for delete message
  firebase.database().ref("messages").on("child_removed", function (snapshot) {
    // remove message node
    document.getElementById("message-" + snapshot.key).innerHTML = "Flaskposten sjönk :(";
  });