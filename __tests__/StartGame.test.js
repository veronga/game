import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {fireEvent, render} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';

import StartGame from 'src/screens/StartGame';

import rootReducer from 'src/reducers';

describe('Test screeen StartGame', () => {
  test('Check save state', () => {
    const navigation = {navigate: jest.fn()};
    const store = configureStore({
      reducer: rootReducer,
    });

    const component = (
      <Provider store={store}>
        <StartGame navigation={navigation} />
      </Provider>
    );

    const {getByTestId} = render(component);
    const addSeconds = getByTestId('button-add-seconds');
    const second = getByTestId('timer-text');

    const timerState = store.getState().timer;

    fireEvent.press(addSeconds);
    fireEvent.press(addSeconds);

    

    expect(timerState).toBe('8');
  });
});
