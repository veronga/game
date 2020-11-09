import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';

import Questions from 'src/screens/Questions';

import rootReducer from 'src/reducers';

import {addUsers} from 'src/reducers/usersSlice';

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
