import {combineReducers} from 'redux';

import usersReducer from './usersSlice';
import timerReducer from './timerSlice';
import categoryReducer from './categorySlice';

export default combineReducers({
  users: usersReducer,
  timer: timerReducer,
  category: categoryReducer,
});
