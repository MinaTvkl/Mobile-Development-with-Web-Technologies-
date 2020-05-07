// Publish a simple message to the “demo_tutorial” channel pubnub:
var pubnubDemo = new PubNub({
    publishKey: 'Ypub-c-138c0ec7-87fa-43fa-8e7d-fb13006e5925',
    subscribeKey: 'sub-c-83aee9b2-8add-11ea-8dc6-429c98eb9bb1'
    });

pubnubDemo.addListener({
    message: function(message){
    console.log(message)
 }
 })
 
 pubnubDemo.subscribe({
 
 channels: ['demo_tutorial']
 
 });


function sendMassage(messagetosend){
    let pubnubDemo = new PubNub({
        publishKey: 'Ypub-c-138c0ec7-87fa-43fa-8e7d-fb13006e5925',
        subscribeKey: 'sub-c-83aee9b2-8add-11ea-8dc6-429c98eb9bb1'
        });
    pubnubDemo.publish({ message: { "color" : "blue" }, channel: 'demo_tutorial' });

}


function givePermission() {
    // feature detect
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation, true);
          }
        })
        .catch(console.error);
    } else {
      // just serve up the EventListener w/o permissions here
     window.addEventListener('deviceorientation', handleOrientation, true);
    }
  }

function handleOrientation(event)
  {
    var heading = event.alpha;
  
    // some browsers don't understand "alpha"
    if (typeof event.webkitCompassHeading !== "undefined") {
       heading = event.webkitCompassHeading;
     }

    document.getElementById("heading").innerHTML = heading.toFixed([0]);
  }