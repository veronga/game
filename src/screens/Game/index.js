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

import {changeIndex, addScore} from 'src/reducers/usersSlice';

import zero from 'src/assets/images/Zero.png';
import plusOne from 'src/assets/images/Plusone.png';

import styles from './styles';

export default function Game({navigation,route}) {
  const {textStyles, containerButton, imgStyles} = styles;

  const { question } = route.params;

  const {timer, users: {players, currentPlayersIndex}} = useSelector((state) => state);

  const {name} = players[currentPlayersIndex];
  const dispatch = useDispatch();

  const [points, setPoints] = useState(null);

  const animationImg = points === 0 ? zero : plusOne;

  const navigatingThroughScreens = useCallback(() => {
    const isUserLast = players.length === currentPlayersIndex + 1;
    if (points === 0) {
      navigation.navigate('Punishment');
    } else if (isUserLast) {
      dispatch(addScore());
      dispatch(changeIndex());
      navigation.navigate('ResultTable');
    } else {
      dispatch(addScore());
      dispatch(changeIndex());
      navigation.navigate('Questions');
    }
  }, [points]);
  

  return (
    <ScreenBackground>
      <Text style={textStyles}>Отвечайте</Text>
      <TextBackground title={`${name}, ` + `${question}`} />
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
  route: PropTypes.object.isRequired,
};
