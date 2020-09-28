import React, {useState} from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

import ScreenBackground from '../../components/ScreenBackground';
import TextBackground from '../../components/TextBackground';
import AnimatedBar from '../../components/AnimatedBar';
import AnswerButton from '../../components/AnswerButton';

import styles from './styles';

import zero from '../../assets/images/Zero.png';
import plusOne from '../../assets/images/Plusone.png';

export default function Game({navigation}) {
  const {textStyles, containerButton, imgStyles} = styles;

  const [points, setPoints] = useState(null);
  const animationImg = points === 0 ? zero : plusOne;

  const AddPoint = () => {
    setPoints(1);
    setTimeout(() => navigation.push('Questions'), 2500);
  };

  const notGetPoint = () => {
    setPoints(0);
    setTimeout(() => navigation.push('Punishment'), 2500);
  };

  return (
    <ScreenBackground>
      <Text style={textStyles}>Отвечайте</Text>
      <TextBackground title="Игрок 1, назовите три места где бы вы хотели заняться сексом " />
      <AnimatedBar timer={16} />
      <View style={containerButton}>
        <AnswerButton
          title="Ответил(а)"
          custombackgroundColor={{backgroundColor: '#32A574'}}
          onPress={AddPoint}
        />
        <AnswerButton
          title="Не ответил(а)"
          custombackgroundColor={{backgroundColor: '#E45B70'}}
          onPress={notGetPoint}
        />
      </View>
      {points !== null && (
        <Animatable.Image
          animation="zoomInUp"
          iterationCount={2}
          direction="alternate"
          style={imgStyles}
          source={animationImg}
        />
      )}
    </ScreenBackground>
  );
}

Game.propTypes = {
  timer: PropTypes.number,
  navigation: PropTypes.func.isRequired,
};
