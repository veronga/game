import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';

import ResultTable from 'src/screens/ResultTable';

import rootReducer from 'src/reducers';

import {addUsers} from 'src/reducers/usersSlice';

describe('Test screeen ResultTable', () => {
  test('Check save value', () => {
    const navigation = {navigate: jest.fn()};
    const store = configureStore({
      reducer: rootReducer,
    });

    const component = (
      <Provider store={store}>
        <ResultTable navigation={navigation} />
      </Provider>
    );

    store.dispatch(
      addUsers([
        {name: 'test', score: 3},
        {name: 'value', score: 5},
      ]),
    );

    const {getAllByTestId} = render(component);
    const names = getAllByTestId('usersName').map((item) => ({
      name: item.children[0],
    }));
    const users = getAllByTestId('usersScore').reduce((acc, current, index) => {
      acc[index].score = Number(current.children[0]);
      return acc;
    }, names);

    expect(users).toEqual([
      {name: 'test', score: 3},
      {name: 'value', score: 5},
    ]);
  });

  test('Check go to the screen', () => {
    const navigation = {navigate: jest.fn()};
    const route = {params: {question: null}};
    const store = configureStore({
      reducer: rootReducer,
    });

    const component = (
      <Provider store={store}>
        <ResultTable route={route} navigation={navigation} />
      </Provider>
    );

    store.dispatch(
      addUsers([
        {name: 'test', score: 1},
        {name: 'test', score: 0},
      ]),
    );

    const {getByText} = render(component);
    const buttonText = getByText('Играть');

    fireEvent.press(buttonText);
    expect(navigation.navigate.mock.calls[0][0]).toBe('Questions');
  });
});
