import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function AddButton({onPress}) {
  const {container, titleStyle, imageStyle} = styles;

  return (
    <TouchableOpacity style={container} onPress={onPress}>
      <Text style={titleStyle}>Добавить игрока</Text>
      <Image
        source={require('../../assets/images/Plus.png')}
        style={imageStyle}
      />
    </TouchableOpacity>
  );
}

AddButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};
