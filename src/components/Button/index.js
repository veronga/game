import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

import styles from './styles';

export default function Button({
  title,
  onPress,
  customStyles,
  customTitleStyles,
  image,
}) {
  const {container, titleStyle,imageStyle} = styles;

  return (
    <TouchableOpacity style={[container, customStyles]} onPress={onPress}>
      <Text style={[titleStyle, customTitleStyles]}>{title}</Text>
      {image && (
        <Animatable.Image
          animation="tada"
          iterationCount={600}
          source={require('../../assets/images/Play.png')}
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
  image: PropTypes,
};

Button.defaultProps = {
  customStyles: {},
  customTitleStyles: {},
};
