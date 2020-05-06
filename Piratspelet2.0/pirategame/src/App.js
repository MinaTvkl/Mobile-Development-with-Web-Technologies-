import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FullPage from './fullpage/fullPage.js';
import './App.css';



class App extends React.Component {
  constructor (props) {
    super(props)
    
  };

  

  render () {
    return (
      <div>
        <Router >
          <React.Fragment>
              <Switch>
                  <Route exact path="/" exact component={() => <FullPage />}/>
              </Switch>
          </React.Fragment>
        </Router>
      </div>    
    )
  }
}

export default App;
