import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function Button({title, onPress, customStyles}) {
  const {container, titleStyle} = styles;

  return (
    <TouchableOpacity style={[container, customStyles]} onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  customStyles: PropTypes.object,
};
