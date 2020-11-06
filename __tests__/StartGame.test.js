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

    fireEvent.press(addSeconds);

    const timerState = store.getState().timer;
    expect(timerState).toBe(8);
  });

  test('Check save new category', () => {
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

    const chengeCategory = getByTestId('category-1');
    const button = getByTestId('button-category');

    fireEvent.press(button);
    fireEvent.press(chengeCategory);

    const categoryState = store.getState().category;
    expect(categoryState).toBe('18+');
  });
});
