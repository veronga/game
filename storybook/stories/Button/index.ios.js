import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

import style from './style';

export default function Button({ onPress, children }) {
  return <TouchableHighlight style={style.container} onPress={onPress}>{children}</TouchableHighlight>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
