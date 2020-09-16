import React from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import ImageButton from '../../components/ImageButton';

import styles from './styles';

import minus from '../../assets/images/Minus.png';

export default function Input({name, placeholder, onChangeText}) {
  const {container, inputStyles,borderTop} = styles;
  return (
    <View style={[container, borderTop]}>
      <TextInput
        style={inputStyles}
        placeholder={placeholder}
        value={name}
        onChangeText={onChangeText}></TextInput>
      <ImageButton imagePath={minus} />
    </View>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.string.isRequired,
};
