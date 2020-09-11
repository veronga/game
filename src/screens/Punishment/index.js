import React from 'react';
import {Image} from 'react-native';

import ScreenBackground from '../../components/ScreenBackground';
import TextBackground from '../../components/TextBackground';
import Button from '../../components/Button';

import styles from './styles';

import imgBeer from '../../assets/images/beer.png'

export default function Punishment() {
  const {imgStyles, customContainer, customStyles} = styles;

  return (
    <ScreenBackground>
      <Image
        source={imgBeer}
        style={imgStyles}
      />
      <TextBackground
        title="Игрок 1 вы не ответили на вопрос выпейте весь свой стакан "
        customContainer={customContainer}
      />
      <Button title="Продолжаем" customStyles={customStyles} />
    </ScreenBackground>
  );
}
