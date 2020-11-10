import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {fireEvent, render} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';

import Punishment from 'src/screens/Punishment';

import rootReducer from 'src/reducers';

import {addUsers} from 'src/reducers/usersSlice';

describe('Test screeen Punishment', () => {
  test('Check go to the screen', () => {
    const navigation = {navigate: jest.fn()};

    const store = configureStore({
      reducer: rootReducer,
    });

    const route = {params: {question: null}};

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
    const answerButton = getByText('Продолжаем');

    fireEvent.press(answerButton);

    expect(navigation.navigate.mock.calls[0][0]).toBe('Questions');
  });
});
