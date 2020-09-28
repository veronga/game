import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

import ScreenBackground from '../../components/ScreenBackground';
import TextBackground from '../../components/TextBackground';
import Button from '../../components/Button';

import styles from './styles';

import imgBeer from '../../assets/images/beer.png';

export default function Punishment({navigation}) {
  const {imgStyles, customContainer, customStyles} = styles;

  return (
    <ScreenBackground>
      <Image source={imgBeer} style={imgStyles} />
      <TextBackground
        title="Игрок 1 вы не ответили на вопрос выпейте весь свой стакан "
        customContainer={customContainer}
      />
      <Button
        title="Продолжаем"
        customStyles={customStyles}
        onPress={() => navigation.navigation('Questions')}
      />
    </ScreenBackground>
  );
}

Punishment.propTypes = {
  navigation: PropTypes.func,
};
