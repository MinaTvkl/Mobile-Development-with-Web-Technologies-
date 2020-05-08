var pubnub = new PubNub({
  publishKey: 'pub-c-a143e51e-3902-4810-a126-c575297d8c39',
  subscribeKey: 'sub-c-35a662fc-908e-11ea-8504-ea59babdc551'
  });
  
    var north_array = []
    var south_array = []
    var east_array = []
    var west_array = []

    var deviceAngle = pubnub.subscribe({
      channels: ["north","south","west","east"],
    });

    function addToChannelArray(data){
      if (data.channel ==="north"){
        north_array.push(data)
        console.log(north_array)

    } else if (data.channel ==="south"){
      south_array.push(data)

    }else if (data.channel ==="east"){
      east_array.push(data)

    }else if (data.channel ==="west"){
      west_array.push(data)
    }
  }
    function matchDirectionWithArray(direction){
      if (direction ==="north"){
        return north_array

    } else if (direction ==="south"){
      return south_array

    }else if (direction ==="east"){
      return east_array

    }else if (direction ==="west"){
      return west_array
    }

    }
    function createMessage(array){
      var chat_container = document.getElementById('chat-container'); //target chat-container

      chat_container.innerHTML = ""; //clears data from div

    
      array.map(messageData =>{
        var node = document.createElement("div");  //create div-element
        node.classList.add("chat-message"); // add css class to div-element

        var textnode = document.createTextNode(messageData.message.message); //adds message to textnode
        node.appendChild(textnode); //adds child node to div-element
        document.getElementById("chat-container").appendChild(node); 

      })
    }
  
    // fetch messages
    pubnub.addListener({
      message: function (fetchData) {
        console.log("message data from:", fetchData);
        var sentMessage= fetchData.message.message;
        var channelName =fetchData.message.channel;

        addToChannelArray(fetchData)
         createMessage(matchDirectionWithArray(getDirection(deviceAngle)));


      var chat_container = document.getElementById('chat-container');
        
      chat_container.classList.add("chat-message");

       

      },
    });
    function changeAngle(){ //used for desktop testing 
      var input_element = document.getElementById("input-angle");
      var angle = input_element.value;
      deviceAngle=angle;
      getDirection(deviceAngle)

    }
    function getDirection (deviceAngle){ // returns string with direction and changes channel title name
      //North scenario 1
      if (deviceAngle>315 ){
        document.getElementById("direction-header").innerHTML = "North";

        return "north"
      }

        //North scenario 2
      if (deviceAngle<45) {
        document.getElementById("direction-header").innerHTML = "North";

        return "north"

      }

       //East scenario
       if (deviceAngle>45 && deviceAngle<135 ){
        document.getElementById("direction-header").innerHTML = "East";

        return "east"

      } 
      
      //West scenario
      if (deviceAngle>225 && deviceAngle<315){
        document.getElementById("direction-header").innerHTML = "West";

        return "west"

      }

      //South scenario
      if (deviceAngle>135 && deviceAngle<225){
        document.getElementById("direction-header").innerHTML = "South";

        return "south"

      }
      if(!deviceAngle){
        return "north"
      }
    }
    
    function sendInput(){ //sends message to corresponding channel depending on direction
      var channel = ""
      channel = getDirection(deviceAngle) //returns angle.

      var input_element = document.getElementById("chat-input");
      var message = input_element.value;
      if (message.length> 0 ){
      pubnub.publish({
      message: {message},
      channel: channel,
    });
    document.getElementById("chat-input").value=null; //clears the text in input field.

    }
    }
    
    function givePermission() {
      // feature detect
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
              window.addEventListener(
                "deviceorientation",
                handleOrientation,
                true
              );
            }
          })
          .catch(console.error);
          document.getElementById("badge-angle").className = "badge badge-primary";
          document.getElementById("ok-button").className = "btn btn-secondary";
          document.getElementById("ok-button").setAttribute("disabled");

      } else {
        // handle regular non iOS 13+ devices
        window.addEventListener("deviceorientation", handleOrientation, true);
        document.getElementById("badge-angle").className = "badge badge-primary";
        document.getElementById("ok-button").className = "btn btn-secondary";
        document.getElementById("ok-button").setAttribute("disabled");
      }
    }

    function handleOrientation(event) {
      var heading = event.alpha;

      deviceAngle = heading.toFixed([0])

      if (typeof event.webkitCompassHeading !== "undefined") {
        heading = event.webkitCompassHeading;
      }
      createMessage(matchDirectionWithArray(getDirection(deviceAngle)));

     
      document.getElementById("badge-angle").innerHTML = heading.toFixed([0]) + "°";
    }