import { combineReducers } from 'redux';
import meetings from './meetings';
import employees from './employees';

const rootReducer = combineReducers({
  meetings,
  employees
});

export default rootReducer;
