import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import plus from 'src/assets/images/Plus.png';
import minus from 'src/assets/images/Minus.png';

export default function Timer({changeTimer, second, isDecreaseDisabled}) {
  const {container, imgStyles, textStyles} = styles;

  const isIncreaseDisabled = second === 35;

  return (
    <View style={container}>
      <TouchableOpacity
        onPress={() => changeTimer((prevValue) => prevValue + 3)}
        disabled={isIncreaseDisabled}>
        <Image style={imgStyles} source={plus} />
      </TouchableOpacity>
      <Text style={textStyles}>{second}</Text>
      <TouchableOpacity
        onPress={() => changeTimer((prevValue) => prevValue - 3)}
        disabled={isDecreaseDisabled}>
        <Image style={imgStyles} source={minus} />
      </TouchableOpacity>
    </View>
  );
}

Timer.propTypes = {
  second: PropTypes.number.isRequired,
  isDecreaseDisabled: PropTypes.bool.isRequired,
  changeTimer: PropTypes.func.isRequired,
};
