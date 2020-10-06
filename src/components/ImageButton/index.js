import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function Button({onPress, imagePath, isDecreaseDisabled}) {
  const {container, imgStyles} = styles;

  return (
    <TouchableOpacity
      style={container}
      onPress={onPress}
      disabled={isDecreaseDisabled}
      activeOpacity={0.5}>
      <Image style={imgStyles} source={imagePath} />
    </TouchableOpacity>
  );
}

Button.propTypes = {
  imagePath: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  isDecreaseDisabled: PropTypes.bool.isRequired,
};
