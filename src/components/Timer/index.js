import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {increment, decrement} from 'src/reducers/timerSlice';

import styles from './styles';

import plus from 'src/assets/images/Plus.png';
import minus from 'src/assets/images/Minus.png';

export default function Timer() {
  const {container, imgStyles, textStyles} = styles;

  const {timer} = useSelector((state) => state);
  const dispatch = useDispatch();

  const isIncreaseDisabled = timer === 35;
  const isDecreaseDisabled = timer <= 5;

  const onPress = () => dispatch(increment());

  return (
    <View style={container}>
      <TouchableOpacity
        onPress={onPress}
        disabled={isIncreaseDisabled}
        testID="button-add-seconds">
        <Image style={imgStyles} source={plus} />
      </TouchableOpacity>
      <Text style={textStyles} testID="timer-text">
        {timer}
      </Text>
      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        disabled={isDecreaseDisabled}
        testID="button-decrement-seconds">
        <Image style={imgStyles} source={minus} />
      </TouchableOpacity>
    </View>
  );
}
