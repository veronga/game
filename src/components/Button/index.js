import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

import styles from './styles';

import play from '../../assets/images/Play.png';

export default function Button({
  title,
  onPress,
  customStyles,
  customTitleStyles,
  isShowButtonIcon,
  isDisabled,
}) {
  
  const {container, titleStyle, imageStyle} = styles;

  return (
    <TouchableOpacity
      style={[container, customStyles]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.5}>
      <Text style={[titleStyle, customTitleStyles]}>{title}</Text>
      {isShowButtonIcon && (
        <Animatable.Image
          animation="tada"
          iterationCount={600}
          source={play}
          style={imageStyle}
        />
      )}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  customStyles: PropTypes.object,
  customTitleStyles: PropTypes.object,
  isShowButtonIcon: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  customStyles: {},
  customTitleStyles: {},
};
