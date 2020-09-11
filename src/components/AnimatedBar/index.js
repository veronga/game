import React, {useRef, useEffect, useState} from 'react';
import {View, Image, Animated, Easing} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import clock from '../../assets/images/Timer.png';

const {mainContainer, tamerContainer, imageStyle} = styles;

export default function AnimatedBar({timer}) {
  const animationRef = useRef(new Animated.Value(timer)).current;
  const [timerState, setTimer] = useState(timer);

  useEffect(() => {
    Animated.timing(animationRef, {
      toValue: timerState,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => {
      if (timerState !== 0) {
        setTimer((prevState) => {
          return prevState - 1;
        });
      }
    });
  }, [timerState]);

  const widthInterpolate = animationRef.interpolate({
    inputRange: [0, timer],
    outputRange: ['15%', '100%'],
    extrapolate: 'clamp',
  });

  const backgroundColorInterpolate = animationRef.interpolate({
    inputRange: [0, timer],
    outputRange: ['#CEB225','#7DB715'],
  });

  return (
    <View style={mainContainer}>
      <Animated.View
        style={[
          tamerContainer,
          {
            width: widthInterpolate,
            backgroundColor: backgroundColorInterpolate,
          },
        ]}>
        <Image
          style={imageStyle}
          source={clock}
        />
      </Animated.View>
    </View>
  );
}

AnimatedBar.propTypes = {
  timer: PropTypes.number.isRequired,
};
