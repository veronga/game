import React, {useCallback} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

import PropTypes from 'prop-types';

import {ScreenBackground, TextBackground, Button} from 'src/components';

import styles from './styles';

export default function Questions({navigation}) {
  const {customStylesButton, textStyles} = styles;

  const { users: {players, currentPlayersIndex}} = useSelector((state) => state);
  const {name} = players[currentPlayersIndex];

  const navigatingThroughScreens = useCallback(() => {
    navigation.navigate('Game');
  }, []);

  return (
    <ScreenBackground>
      <Text style={textStyles}>{'Прочитайте задание и начинайте играть'}</Text>
      <TextBackground title={`${name} ` + 'крабш'} />
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
