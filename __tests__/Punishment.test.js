import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {fireEvent, render} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';

import Punishment from 'src/screens/Punishment';

import rootReducer from 'src/reducers';

import {addUsers, changeIndex} from 'src/reducers/usersSlice';

describe('Test screeen Punishment', () => {
  test('Check go to the screen', () => {
    const navigation = {navigate: jest.fn()};
    const route = {params: {question: null}};
    const store = configureStore({
      reducer: rootReducer,
    });


    const component = (
      <Provider store={store}>
        <Punishment route={route} navigation={navigation} />
      </Provider>
    );

    store.dispatch(
      addUsers([
        {name: 'test', score: 1},
        {name: 'test', score: 0},
      ]),
    );

    const {getByText} = render(component);
    const buttonText = getByText('Продолжаем');

    fireEvent.press(buttonText);
    expect(navigation.navigate.mock.calls[0][0]).toBe('Questions');
  });

  test('Check go to the screen', () => {
    const navigation = {navigate: jest.fn()};
    const route = {params: {question: null}};
    const store = configureStore({
      reducer: rootReducer,
    });

    const component = (
      <Provider store={store}>
        <Punishment route={route} navigation={navigation} />
      </Provider>
    );

    store.dispatch(
      addUsers([
        {name: 'test', score: 1},
        {name: 'test', score: 1},
      ]),
    );
    store.dispatch(changeIndex());
    
    const {getByText} = render(component);
    const buttonText = getByText('Продолжаем');

    fireEvent.press(buttonText);
    expect(navigation.navigate.mock.calls[0][0]).toBe('ResultTable');
  });
});
