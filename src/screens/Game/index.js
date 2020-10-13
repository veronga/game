import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import ScreenBackground from '../../components/ScreenBackground';
import TextBackground from '../../components/TextBackground';
import AnimatedBar from '../../components/AnimatedBar';
import AnswerButton from '../../components/AnswerButton';

import styles from './styles';

import zero from '../../assets/images/Zero.png';
import plusOne from '../../assets/images/Plusone.png';

export default function Game({navigation}) {
  const {textStyles, containerButton, imgStyles} = styles;
  const {timer} = useSelector((state) => state);

  const [points, setPoints] = useState(null);
  const animationImg = points === 0 ? zero : plusOne;

  const navigatingThroughScreens = useCallback(() => {
    if (points === 0) {
      navigation.navigate('Punishment');
    } else {
      navigation.navigate('Questions');
    }
  }, [points]);

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
      {points !== null && (
        <Animatable.Image
          animation="zoomInUp"
          iterationCount={2}
          direction="alternate"
          style={imgStyles}
          source={animationImg}
          onAnimationEnd={navigatingThroughScreens}
        />
      )}
    </ScreenBackground>
  );
}

Game.propTypes = {
  navigation: PropTypes.object.isRequired,
};
