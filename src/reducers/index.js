import {combineReducers} from 'redux';

import usersReducer from './usersSlice';
import timerReducer from './timerSlice';

export default combineReducers({
  users: usersReducer,
  timer: timerReducer,
});
