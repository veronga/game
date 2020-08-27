import React from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import ImageButton from '../../components/ImageButton';

import styles from './styles';

export default function Input({name, placeholder, onChangeText}) {
  const {container, inputStyles} = styles;
  return (
    <View style={container}>
      <TextInput
        style={inputStyles}
        placeholder={placeholder}
        value={name}
        onChangeText={onChangeText}></TextInput>
      <ImageButton imagePath={require('../../assets/images/Minus.png')} />
    </View>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.string.isRequired,
};
