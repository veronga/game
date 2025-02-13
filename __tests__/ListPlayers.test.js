import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {fireEvent, render} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';

import ListPlayers from 'src/screens/ListPlayers';

import rootReducer from 'src/reducers';

describe('Test screeen ListPlayers', () => {
  test('Check save value', () => {
    const navigation = {navigate: jest.fn()};
    const store = configureStore({
      reducer: rootReducer,
    });

    const component = (
      <Provider store={store}>
        <ListPlayers navigation={navigation} />
      </Provider>
    );
    const {getByTestId, getByText} = render(component);
    const firstInput = getByTestId('input-0');
    const secondInput = getByTestId('input-1');
    const buttonText = getByText('Дальше');

    fireEvent.changeText(firstInput, 'test');
    fireEvent.changeText(secondInput, 'value');
    fireEvent.press(buttonText);

    const usersState = store.getState().users.players;
    expect(usersState).toEqual([
      {name: 'test', score: 0},
      {name: 'value', score: 0},
    ]);
  });

  test('Check validation in input', () => {
    const store = configureStore({
      reducer: rootReducer,
    });

    const component = (
      <Provider store={store}>
        <ListPlayers />
      </Provider>
    );
    const {getByTestId, getByText} = render(component);
    const input = getByTestId('input-0');
    const buttonText = getByText('Дальше');
    const errorText = getByTestId('error');

    fireEvent.changeText(input, 'test');
    fireEvent.press(buttonText);
    expect(errorText.children[0]).toBe(
      'Пожалуйста введите как минимум имена двоих участноков',
    );
  });

  test('Check add and remove new input', () => {
    const store = configureStore({
      reducer: rootReducer,
    });

    const component = (
      <Provider store={store}>
        <ListPlayers />
      </Provider>
    );
    const {getByTestId, queryByTestId} = render(component);
    const addInputButton = getByTestId('add-input');
    
    expect(queryByTestId('input-2')).toBeNull();
    fireEvent.press(addInputButton);
    expect(getByTestId('input-2')).toBeTruthy();
    const removeInputButton = getByTestId('remove-button-2');
    fireEvent.press(removeInputButton);
    expect(queryByTestId('input-2')).toBeNull();
  });
});
