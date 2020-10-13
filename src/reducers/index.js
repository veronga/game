import {combineReducers} from 'redux';

import todosReducer from './todosSlice';
import timerReducer from './timerSlice';

export default combineReducers({
  todos: todosReducer,
  timer: timerReducer,
});
