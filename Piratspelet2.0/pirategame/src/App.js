import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FullPage from './fullpage/fullPage.js';
import './App.css';

var ons = require('onsenui');
var Ons = require('react-onsenui');
var ReactDOM = require('react-dom');



export default class App extends React.Component {
  constructor (props) {
    super(props)
    
  };

  
  render () {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <p>This is Onsen UI!</p>
      </Ons.Page>
    );
  }
}

function handleClick() {
    ons.notification.alert('Hello world!');
  }
 

 
