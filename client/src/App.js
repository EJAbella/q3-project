import React, { Component } from 'react';
import './App.css';
import TopNavBar from "./components/TopNavBar";
import HomePage from './components/HomePage';
import MeetingPage from './components/MeetingPage';
import UserPage from './components/UserPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>Test
      {/*<Router>*/}
        {/*<div>*/}
          {/*<TopNavBar/>*/}

          {/*<Route exact path='/' component={HomePage}/>*/}
          {/*<Route path='/meeting/:id' component={MeetingPage}/>*/}
          {/*<Route path='/employee/:id' component={UserPage}/>*/}

        {/*</div>*/}
      {/*</Router>*/}
      </div>
    );
  }
}

export default App;
