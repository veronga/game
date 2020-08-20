import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const {mainContainer, tamerContainer, imageStyle} = styles;

export default function AnimatedBar() {
  return (
    <View style={mainContainer}>
      <View style={tamerContainer}>
        <Image
          style={imageStyle}
          source={require('../../assets/images/Tamer.png')}
        />
      </View>
    </View>
  );
}

AnimatedBar.propTypes = {
  players: PropTypes.string.isRequired,
};
