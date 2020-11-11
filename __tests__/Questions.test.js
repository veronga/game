import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';

import Questions from 'src/screens/Questions';

import rootReducer from 'src/reducers';

import {addUsers} from 'src/reducers/usersSlice';

describe('Test screeen Questions', () => {
  test('Check save state', () => {
    const store = configureStore({
      reducer: rootReducer,
    });

    const component = (
      <Provider store={store}>
        <Questions />
      </Provider>
    );

    store.dispatch(addUsers([{name: 'test', score: 0}]));

    const {getByTestId} = render(component);
    const nameUser = getByTestId('test');

    const {currentPlayersIndex} = store.getState().users;
    const {name} = store.getState().users.players[currentPlayersIndex];
    expect(nameUser.children[0]).toContain(name);
  });

  test('Check go to the screen', () => {
    const navigation = {navigate: jest.fn()};
    const route = {params: {question: null}};
    const store = configureStore({
      reducer: rootReducer,
    });


    const component = (
      <Provider store={store}>
        <Questions route={route} navigation={navigation} />
      </Provider>
    );

    store.dispatch(
      addUsers([
        {name: 'test', score: 0},
        {name: 'test', score: 0},
      ]),
    );

    const {getByText} = render(component);
    const buttonText = getByText('Начинаем');
    
    fireEvent.press(buttonText);
    expect(navigation.navigate.mock.calls[0][0]).toBe('Game');
  });
});
