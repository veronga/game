import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function AnswerButton({title, onPress, custombackgroundColor}) {
  const {container, titleStyle} = styles;

  return (
    <TouchableOpacity
      style={[container, custombackgroundColor]}
      onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

AnswerButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  custombackgroundColor: PropTypes.object.isRequired,
};
