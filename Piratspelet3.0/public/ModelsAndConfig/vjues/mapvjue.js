import React from 'react';
import '../App.css';
import "./mapsscript";
import MapsModel from "../locationFunctions";

export default class ChooseHero extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            freetext:"superman"
        };
        this.myVar;
        
        
    }

    componentDidMount() {
        this.props.model.addObserver(() => this.update());
        
      }
     
    componentWillUnmount() {
        this.props.model.removeObserver(this)
      }

    render(){
        
        return <div onload = {loader()}>
        
            <div id="intro">
              <h1>Welcome to our map app
        
              </h1>
            
              <div id="loader">
        
              </div>
            </div>
        
            <div id="myDiv" style="display:none;">
              <div id="goFS" draggable="true">
              <button onClick="closeFullscreen()"> Open/Close Fullscreen</button></div>
              <div id="map"></div>
              <div id="controlWrapper">
                
                <div class ="Locationbuttons">
                  <button class ="Locationbutton" id="currentLocation" >Din Nuvarande Plats</button>
                  <button class ="Locationbutton" id="simon" onClick={favoriteLocation(this.id)}> Simons favoritplats</button>
                  <button class ="Locationbutton" id="mina" onClick={favoriteLocation(this.id)}> Minas favoritplats</button>
                  <button class ="Locationbutton" id="erik" onClick={favoriteLocation(this.id)}> Eriks Favoritplats</button>
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
  
              
              
    
}



function loader() {
    this.myVar = setTimeout(showPage, 3000);
  }
  
  
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }



