import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import plus from '../../assets/images/Plus.png';
import minus from '../../assets/images/Minus.png';

export default function Timer({onPress, title}) {
  const {container, imgStyles, textStyles} = styles;

  return (
    <View style={container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={imgStyles} source={plus} />
      </TouchableOpacity>
      <Text style={textStyles}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image style={imgStyles} source={minus} />
      </TouchableOpacity>
    </View>
  );
}

Timer.propTypes = {
  title: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};
