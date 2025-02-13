import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function Button({
  onPress,
  imagePath,
  isDecreaseDisabled,
  testID,
}) {
  const {container, imgStyles} = styles;

  return (
    <TouchableOpacity
      testID={testID}
      style={container}
      onPress={onPress}
      disabled={isDecreaseDisabled}
      activeOpacity={0.5}>
      <Image style={imgStyles} source={imagePath} />
    </TouchableOpacity>
  );
}

Button.propTypes = {
  imagePath: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  isDecreaseDisabled: PropTypes.bool.isRequired,
  testID: PropTypes.string,
};
