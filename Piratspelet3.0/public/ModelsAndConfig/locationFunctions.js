import firebaseConfig from "./mapsConfig";
var firebase = require('firebase');



export class MapsModel{
  constructor(props) {
    super();
    this.props = props;
    this.subscribers = [];
    this.myLocation;
    this.user ="";
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.database();
  }

  addObserver(callback) {
    this.subscribers.push(callback);
  }

  removeObserver(callback) {
    callback = this.subscribers.filter((o) => o !== callback);
  }

  notifyObservers(whatHappened) {
    this.subscribers.forEach(function (callback) {
      callback(whatHappened);
    });
  }

  setLocation(location){
      this.myLocation = location;
  }

  getLocation(){
      return this.myLocation
  }

  setUser(user){
    this.user=user;
  }

  getUser(){
    return this.user
  }

  getOthersPlaylistsfromdatabase(limit = 5) {
    let locations = [];
    return this.db
      .ref("piratspelet/locations")
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
    this.db.ref("piratspelet/location/'" + user).set({
      Location: location,
      Text: text,
      User: user,
      Timestamp:timestamp,
    });
  }


}

