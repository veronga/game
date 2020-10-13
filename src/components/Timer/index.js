import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {increment} from '../../reducers/timerSlice';
import {decrement} from '../../reducers/timerSlice';

import styles from './styles';

import plus from '../../assets/images/Plus.png';
import minus from '../../assets/images/Minus.png';

export default function Timer() {
  const {container, imgStyles, textStyles} = styles;

  const {timer} = useSelector((state) => state);
  const dispatch = useDispatch();

  const isIncreaseDisabled = timer === 35;
  const isDecreaseDisabled = timer <= 5;

  return (
    <View style={container}>
      <TouchableOpacity
        onPress={() => dispatch(increment())}
        disabled={isIncreaseDisabled}>
        <Image style={imgStyles} source={plus} />
      </TouchableOpacity>
      <Text style={textStyles}>{timer}</Text>
      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        disabled={isDecreaseDisabled}>
        <Image style={imgStyles} source={minus} />
      </TouchableOpacity>
    </View>
  );
}
