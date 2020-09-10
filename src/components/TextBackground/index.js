import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function TextBackground({title, customContainer}) {
  const {container, titleStyle} = styles;
  return (
    <View style={[container, customContainer]}>
      <Text style={titleStyle}>{title}</Text>
    </View>
  );
}

TextBackground.propTypes = {
  title: PropTypes.string.isRequired,
  customContainer: PropTypes.object,
};

TextBackground.defaultProps = {
  customContainer: {},
};
