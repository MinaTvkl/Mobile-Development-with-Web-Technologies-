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
              <ons-toolbar-button>
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
            <ons-list-item onclick={handleClick()} tappable>
              Home
            </ons-list-item>
          </ons-list>
        </ons-page>
      </ons-splitter-side>
    </ons-splitter>

    <template id="settings.html">
    <ons-page>
      <ons-toolbar>
        <div class="left">
          <ons-toolbar-button>
            <ons-icon icon="md-menu"></ons-icon>
          </ons-toolbar-button>
        </div>
        <div class="center">
          Settings
        </div>
      </ons-toolbar>
    </ons-page>
  </template>

  <ons-button>Click Me</ons-button>
  <ons-toolbar id="header">
      <div class="left">
          <ons-toolbar-button>
            <ons-icon icon="md-menu"></ons-icon>
          </ons-toolbar-button>
      </div>
      <div class="center">Slide for more</div>
      <div class="right">
        </div>
  </ons-toolbar>

  <template id="dialog.html">
  <ons-dialog id="my-dialog">
    <div>
      <p>
        Hello=)
      </p>

      <p>
      </p>
    </div>
  </ons-dialog>
</template>

<template id="about.html">
<ons-page id="about">
    <ons-toolbar>
        <div class="left">
            <ons-toolbar-button onclick="fn.open()">
              <ons-icon icon="md-menu"></ons-icon>
            </ons-toolbar-button>
        </div>
        <div class="center" id="">About</div>
    </ons-toolbar>
    <div class="my-header">
        <img class="my-header-image" src="photos/photo-default.jpg" />
    </div>
    <div class="my-content">
        <h1>Relaxation iBeacons</h1>
        <p>Please move within range of the Relaxation iBeacons.</p>
    </div>
</ons-page>

</template>

<template id="page3.html">
<ons-page id="page3">
    <ons-toolbar>
        <div class="left">
            <ons-toolbar-button onclick="fn.open()">
              <ons-icon icon="md-menu"></ons-icon>
            </ons-toolbar-button>
        </div>
        <div class="center">Feet</div>
    </ons-toolbar>
    <div class="my-header">
        <img class="my-header-image" src="photos/photo-feet.jpg" />
    </div>
    <div class="my-content">
        <h1>Feel Your Feet</h1>
        <ul>
            <li>Stand on your feet.</li>
            <li>Experience the contact with the ground.</li>
            <li>Feel into the soles of the feet.</li>
            <li>Feel the knees.</li>
            <li>The hips.</li>
            <li>The spine.</li>
            <li>Shoulders.</li>
            <li>Neck.</li>
            <li>Head.</li>
            <li>Feel the connection between the top of the head and the feet.</li>
        </ul>
    </div>
    <ons-list>
        <ons-list-header>Task compleation</ons-list-header>
        <ons-list-item>
          <div class="center">
            Done with task
          </div>
          <div class="right">
            <ons-switch></ons-switch>
          </div>
        </ons-list-item>
        
      </ons-list>
    </ons-page>
</template>

<template id="page4.html">
<ons-page id="page4">
    <ons-toolbar>
        <div class="left">
            <ons-toolbar-button onclick="fn.open()">
              <ons-icon icon="md-menu"></ons-icon>
            </ons-toolbar-button>
        </div>
        <div class="center">Shoulders</div>
    </ons-toolbar>
    <div class="my-header">
        <img class="my-header-image" src="photos/photo-shoulders-1.jpg" />
    </div>
    <div class="my-content">
        <h1>Feel Your Shoulders</h1>
        <ul>
            <li>Let your arms hang loose.</li>
            <li>Become aware of the shoulders.</li>
            <li>Slightly lift one shoulder and release it.</li>
            <li>Let the shoulder come all the way down.</li>
            <li>Lift the other shoulder and release it.</li>
            <li>Alternate three more times on each side.</li>
            <li>Experience the breath flowing in and out of the body.</li>
        </ul>
    </div>
    <ons-list>
        <ons-list-header>Task compleation</ons-list-header>
        <ons-list-item>
          <div class="center">
            Done with task
          </div>
          <div class="right">
            <ons-switch></ons-switch>
          </div>
        </ons-list-item>
        
      </ons-list>
</ons-page>
</template>

<template id="page5.html">
<ons-page id="page5">
    <ons-toolbar>
        <div class="left">
            <ons-toolbar-button onclick="fn.open()">
              <ons-icon icon="md-menu"></ons-icon>
            </ons-toolbar-button>
        </div>
        <div class="center">Face</div>
    </ons-toolbar>
    <div class="my-header">
        <img class="my-header-image" src="photos/photo-face.jpg" />
    </div>
    <div class="my-content">
        <h1>Feel Your Face</h1>
        <ul>
            <li>Become aware of your face.</li>
            <li>Feel the forehead.</li>
            <li>The eyebrows.</li>
            <li>Eyes.</li>
            <li>Nose.</li>
            <li>Nostrils.</li>
            <li>Air flowing through the nostrils.</li>
            <li>Cheeks.</li>
            <li>Jaw.</li>
            <li>Lips.</li>
            <li>Tongue.</li>
            <li>Whole of the head.</li>
            <li>The space surrounding the head.</li>
        </ul>
    </div>
    <ons-list>
        <ons-list-header>Task compleation</ons-list-header>
        <ons-list-item>
          <div class="center">
            Done with task
          </div>
          <div class="right">
            <ons-switch></ons-switch>
          </div>
        </ons-list-item>
        
      </ons-list>
</ons-page>
</template>


        

        </React.Fragment>

            );
        }
    
  
    }

function handleClick () {
    ons.notification.alert('Hello world!');
    }


window.fn = {};

