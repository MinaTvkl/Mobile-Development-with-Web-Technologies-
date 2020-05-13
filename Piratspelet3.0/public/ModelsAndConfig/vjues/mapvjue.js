import '../App.css';
import "./mapsscript";
import MapsModel from "../locationFunctions";

export default class ChooseHero {
    constructor(props){
        super(props);
        this.props = props;
        this.model = new MapsModel(this.props);
        this.state = {
            freetext:"superman"
        };
        this.myVar;
        this.location;
        
        
    }


    
    componentDidMount() {
        this.props.model.addObserver(() => this.update());
        
      }
     
    componentWillUnmount() {
        this.props.model.removeObserver(this)
      }

    render(){
        
        return <div onload = {this.loader()}>
        
            <div id="intro">
              <h1>Welcome to our map app
        
              </h1>
            
              <div id="loader">
        
              </div>
            </div>
        
            <div id="myDiv" style="display:none;">
              <div id="goFS" draggable="true">
              <button onClick={closeFullscreen()}> Open/Close Fullscreen</button></div>
              <div id="map"></div>
              <div id="controlWrapper">
                
                <div class ="Locationbuttons">
                  <button class ="Locationbutton" id="currentLocation" onClick={shareLocation()} >Dela din plats Nuvarande Plats</button>
                  <button class ="Locationbutton" id="simon" onClick={getOthersLocation(this.model)}> Find players</button>
                  
                </div>
        
                <div class ="zoombuttons">
                  <button class= "zoombutton" id="zoomInButton" draggable="true">+</button>
                  <button class= "zoombutton" id="zoomOutButton" draggable="true">-</button>
                </div>
              </div>
            </div>
            <script src="script.js"></script>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCxuXYlxmbsxvPR1YOyCuNUPu9cBqj3FGk&callback=initMap"
            async defer></script>
          </div>
    }
  
  shareLocation(){
      this.location = getLocation();
      let currentTime= new Date().getTime();
      this.model.addYourplaylistToDatabase(this.location, "someText", "name", currentTime )
  
  
    }       
              
    loader() {
      this.myVar = setTimeout(showPage, 3000);
    }

    showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("intro").style.display = "none";
      document.getElementById("myDiv").style.display = "block";
    }
}