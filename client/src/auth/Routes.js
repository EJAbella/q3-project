import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './Home';
import Callback from './Callback';
import Auth from './auth';
import history from './history';
import MeetingPage from "../components/MeetingPage";
import UserPage from "../components/UserPage";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if(/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const Routes = () => {
  return (
    <Router history={history} component={Home}>
      <div>
        <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/meeting/:id" render={(props) => <MeetingPage auth={auth} {...props} />} />
        <Route path="/employee/:id" render={(props) => <UserPage auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props}/>
        }} />
      </div>
    </Router>
  )
};

export default Routes;