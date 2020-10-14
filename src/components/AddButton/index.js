import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import plus from 'src/assets/images/Plus.png';

export default function AddButton({onPress}) {
  const {container, titleStyle, imageStyle} = styles;

  return (
    <TouchableOpacity style={container} onPress={onPress} activeOpacity={0.5}>
      <Text style={titleStyle}>Добавить игрока</Text>
      <Image source={plus} style={imageStyle} />
    </TouchableOpacity>
  );
}

AddButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};
