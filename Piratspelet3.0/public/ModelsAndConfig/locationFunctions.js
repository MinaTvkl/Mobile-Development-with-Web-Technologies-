import React from "react";
import firebaseConfig from "./vjues/mapsConfig";
import firebase from "firebase";



  function setLocation(location){
      var location = location;
  }

  getLocation(){
      location
  }


  getOthersPlaylistsfromdatabase(limit = 5) {
    let locations = [];
    return this.db
      .ref("piratspelet")
      .limitToLast(limit)
      .once("value")
      .then((snapshot) => {
        snapshot = snapshot.toJSON();
        Object.values(snapshot)
          .reverse()
          .forEach((doc) => {
            locations.push({
              Location: doc.Location,
              Text: doc.Text,
              User: doc.User,
              Timestamp:doc.Timestamp,
            });
          });
        return locations;
      });
  }

  //add a playlist to firebase
  addYourplaylistToDatabase(location, text, user, timestamp) {
    this.db.ref("piratspelet/" + user).set({
      Location: location,
      Text: text,
      User: user,
      Timestamp:timestamp,
    });
  }


}

//A funktion for shuffleing an array (NOT USED)
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function uniq(a) {
  var prims = { boolean: {}, number: {}, string: {} },
    objs = [];

  return a.filter(function (item) {
    var type = typeof item;
    if (type in prims)
      return prims[type].hasOwnProperty(item)
        ? false
        : (prims[type][item] = true);
    else return objs.indexOf(item) >= 0 ? false : objs.push(item);
  });
}
