import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let middleware = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;