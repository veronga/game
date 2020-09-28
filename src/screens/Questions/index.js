import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import ScreenBackground from '../../components/ScreenBackground';
import TextBackground from '../../components/TextBackground';
import Button from '../../components/Button';

import styles from './styles';

export default function Questions({navigation}) {
  const {customStylesButton, textStyles} = styles;

  return (
    <ScreenBackground>
      <Text style={textStyles}>{'Прочитайте задание и начинайте играть'}</Text>
      <TextBackground title="Игрок 1, назовите три места где бы вы хотели заняться сексом " />
      <Button
        title="Начинаем"
        customStyles={customStylesButton}
        onPress={() => navigation.navigate('Game')}
      />
    </ScreenBackground>
  );
}

Questions.propTypes = {
  navigation: PropTypes.func.isRequired,
};
