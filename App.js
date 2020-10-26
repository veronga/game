import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import Router from './src/navigation';
import rootReducer from './src/reducers';

import Reactotron from './src/config/ReactotronConfig';

const store = configureStore({
  reducer: rootReducer,
  enhancers: [Reactotron.createEnhancer()],
});

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
