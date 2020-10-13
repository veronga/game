import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import Router from './src/navigation';
import rootReducer from './src/reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
