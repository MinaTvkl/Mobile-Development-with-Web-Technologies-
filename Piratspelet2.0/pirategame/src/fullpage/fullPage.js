import React from 'react';
import '../App.css';


var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');

export default class FullPage extends React.Component {


       
    render () {
        return (
            <React.Fragment>
            <Ons.Page>
                <ons-list>
                <ons-list-item onclick="fn.load('home.html')" tappable>
                Home
                </ons-list-item>
                <ons-list-item onclick="fn.load('page3.html')" tappable>
                Feet
                </ons-list-item>
                <ons-list-item onclick="fn.load('page4.html')" tappable>
                Shoulders
                </ons-list-item>
                <ons-list-item onclick="fn.load('about.html')" tappable>
                About
                </ons-list-item>
            </ons-list>
          </Ons.Page>

          <ons-page>
          <ons-toolbar>
            <div class="left">
              <ons-toolbar-button onclick="fn.open()">
                <ons-icon icon="md-menu"></ons-icon>
              </ons-toolbar-button>
            </div>
            <div class="center">
              Main
            </div>
          </ons-toolbar>

        </ons-page>

        <ons-page>
        <ons-tabbar swipeable position="auto" id="header">
          <ons-tab label="About" icon="md-home" id="about">
          </ons-tab>
          <ons-tab label="Feet" icon="md-settings" active-icon="md-face" id="feet">
          </ons-tab>
          <ons-tab plabel="Shoulders" icon="md-settings" active-icon="md-face" id="shoulders">
        </ons-tab>
        <ons-tab label="Face" icon="md-settings" active-icon="md-face" id="face">
        </ons-tab>
        </ons-tabbar>
      </ons-page>

      <ons-splitter>
      <ons-splitter-side id="menu" side="left" width="220px" collapse swipeable>
        <ons-page>
          <ons-list>
            <ons-list-item onclick= {fn.load('home.html')} tappable>
              Home
            </ons-list-item>
          </ons-list>
        </ons-page>
      </ons-splitter-side>
      <ons-splitter-content id="about" page="about.html"></ons-splitter-content>
    </ons-splitter>

        

        </React.Fragment>

            );
        }
    
  
    }

function handleClick () {
    ons.notification.alert('Hello world!');
    }

