import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import {getMeetings} from "./actions/meetingActions";
import {getEmployees} from "./actions/employeeActions";
import Routes from "./auth/Routes";

store.dispatch(getMeetings());
store.dispatch(getEmployees());

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
