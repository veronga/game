import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {fireEvent, render} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';

import Game from 'src/screens/Game';

import rootReducer from 'src/reducers';

import {addUsers} from 'src/reducers/usersSlice';

describe('Test screeen Game', () => {
  test('Check save add score', () => {
    const navigation = {navigate: jest.fn()};

    const store = configureStore({
      reducer: rootReducer,
    });

    const route = {params: {question: null}};

    const component = (
      <Provider store={store}>
        <Game route={route} navigation={navigation} />
      </Provider>
    );

    store.dispatch(addUsers([{name: 'test', score: 0}]));

    const {getByText} = render(component);
    const answerButton = getByText('Ответил(а)');

    fireEvent.press(answerButton);
    const {currentPlayersIndex} = store.getState().users;
    const {score} = store.getState().users.players[currentPlayersIndex];
    setTimeout(() => {
      expect(navigation.navigate.mock.calls.length).toBe(1);
      expect(score).toBe(1);
    }, 1000);
  });

  test('Check go to the screen', () => {
    const navigation = {navigate: jest.fn()};

    const store = configureStore({
      reducer: rootReducer,
    });

    const route = {params: {question: null}};

    const component = (
      <Provider store={store}>
        <Game route={route} navigation={navigation} />
      </Provider>
    );

    store.dispatch(addUsers([{name: 'test', score: 0}]));

    const {getByText} = render(component);
    const answerButton = getByText('Не ответил(а)');

    fireEvent.press(answerButton);
    setTimeout(() => {
      expect(navigation.navigate.mock.calls).toBe(1);
    }, 1000);
  });
});
