import {combineReducers} from 'redux';

import todosReducer from './todosSlice';
import timerSlice from './timerSlice';

export default combineReducers({
  todos: todosReducer,
  timer: timerSlice,
});
