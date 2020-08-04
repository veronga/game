import React from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function Input({name, placeholder, onChangeText}) {
  const {firstinputStyle} = styles;
  return (
    <View>
      <TextInput
        style={firstinputStyle}
        placeholder={placeholder}
        value={name}
        onChangeText={onChangeText}
      />
    </View>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.string,
};
