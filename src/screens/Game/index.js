import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {
  ScreenBackground,
  TextBackground,
  AnimatedBar,
  AnswerButton,
} from 'src/components';

import {changeIndex} from 'src/reducers/usersSlice';

import zero from 'src/assets/images/Zero.png';
import plusOne from 'src/assets/images/Plusone.png';

import styles from './styles';

export default function Game({navigation}) {
  const {textStyles, containerButton, imgStyles} = styles;
  const {timer, users: {players, currentPlayersIndex}} = useSelector((state) => state);
  const {name} = players[currentPlayersIndex];

  const dispatch = useDispatch();

  const [points, setPoints] = useState(null);
  const animationImg = points === 0 ? zero : plusOne;

  const navigatingThroughScreens = useCallback(() => {
    if (points === 0) {
      navigation.navigate('Punishment');
    } else if (players.length === currentPlayersIndex + 1) {
      navigation.navigate('ResultTable');
      dispatch(changeIndex());
    } else {
      navigation.navigate('Questions');
      dispatch(changeIndex());
    }
  }, [points]);

  return (
    <ScreenBackground>
      <Text style={textStyles}>Отвечайте</Text>
      <TextBackground title={`${name}, ` + 'крабш'} />
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
