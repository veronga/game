import React, {useCallback} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import {ScreenBackground, TextBackground, Button} from 'src/components';

import styles from './styles';

export default function Questions({navigation}) {
  const {customStylesButton, textStyles} = styles;

  const navigatingThroughScreens = useCallback(() => {
    navigation.navigate('Game');
  }, []);

  return (
    <ScreenBackground>
      <Text style={textStyles}>{'Прочитайте задание и начинайте играть'}</Text>
      <TextBackground title="Игрок 1, назовите три места где бы вы хотели заняться сексом " />
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
