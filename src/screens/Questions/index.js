import React, {useCallback} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

import PropTypes from 'prop-types';

import {ScreenBackground, TextBackground, Button} from 'src/components';

import questions from 'src/questions.json';

import styles from './styles';

export default function Questions({navigation}) {
  const {customStylesButton, textStyles} = styles;

  const { users: {players, currentPlayersIndex}} = useSelector((state) => state);
  const {category} = useSelector((state) => state);
  const {name} = players[currentPlayersIndex];

  function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(questions[category].length));
  }
  const index = getRandomInt();
  const question = questions[category][index];

  const navigatingThroughScreens = useCallback(() => {
    navigation.navigate('Game', {question: question});
  }, [question]);

  return (
    <ScreenBackground>
      <Text style={textStyles}>{'Прочитайте задание и начинайте играть'}</Text>
      <TextBackground title={`${name}, ` + `${question}`} />
      <Button
        title="Начинаем"
        customStyles={customStylesButton}
        onPress={navigatingThroughScreens}
      />
    </ScreenBackground>
  );
}

Questions.propTypes = {
  navigation: PropTypes.object.isRequired,
};
