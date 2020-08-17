import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import {View} from 'react-native-animatable';

export default function Timer({onPress, title}) {
  const {container, imgStyles, textStyles} = styles;

  return (
    <View style={container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={imgStyles}
          source={require('../../assets/images/Plus.png')}
        />
      </TouchableOpacity>
      <Text style={textStyles}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={imgStyles}
          source={require('../../assets/images/Minus.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

Timer.propTypes = {
  title: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};
