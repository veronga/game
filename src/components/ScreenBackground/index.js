import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function ScreenBackground({children}) {
  const {container} = styles;
  return <View style={container}>{children}</View>;
}

ScreenBackground.propTypes = {
  children: PropTypes.array.isRequired,
};
