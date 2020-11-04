import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Input from 'src/components/Input';

test('д', () => {
  const {getByPlaceholderText} = render(<Input placeholder="test" />);
  const input = getByPlaceholderText('test');
  fireEvent.changeText(input, 'ку');
  expect(input.props.value).toEqual('ку');
});
