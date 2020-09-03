import React, {useState} from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

import ScreenBackground from '../../components/ScreenBackground';
import TextBackground from '../../components/TextBackground';
import AnimatedBar from '../../components/AnimatedBar';
import AnswerButton from '../../components/AnswerButton';

import styles from './styles';

export default function StartGame({timer}) {
  const {textStyles, containerButton, imgStyles} = styles;

  const [points, setPoints] = useState(null);

  return (
    <ScreenBackground>
      <Text style={textStyles}>Отвечайте</Text>
      <TextBackground title="Игрок 1, назовите три места где бы вы хотели заняться сексом " />
      <AnimatedBar timer={timer} />
      <View style={containerButton}>
        <AnswerButton
          title="Ответил(а)"
          custombackgroundColor={{backgroundColor: '#32A574'}}
          onPress={() => setPoints(1)}
        />
        <AnswerButton
          title="Не ответил(а)"
          custombackgroundColor={{backgroundColor: '#E45B70'}}
          onPress={() => setPoints(0)}
        />
      </View>
      {points === 1 ? (
        <Animatable.Image
          animation="zoomInUp"
          iterationCount={2}
          direction="alternate"
          style={imgStyles}
          source={require('../../assets/images/Plusone.png')}
        />
      ) : points === 0 ? (
        <Animatable.Image
          animation="zoomInUp"
          iterationCount={2}
          direction="alternate"
          style={imgStyles}
          source={require('../../assets/images/Zero.png')}
        />
      ) : null}
    </ScreenBackground>
  );
}

StartGame.propTypes = {
  timer: PropTypes.number.isRequired,
};
