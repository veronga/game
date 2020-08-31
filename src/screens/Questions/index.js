import React from 'react';


import ScreenBackground from '../../components/ScreenBackground';
import TextBackground  from '../../components/TextBackground';
import Button  from '../../components/Button';

import styles from './styles';

export default function Questions() {
  const {customStylesButton} = styles;

  return (
    <ScreenBackground>
        <TextBackground title='Игрок 1, назовите три места где бы вы хотели заняться сексом '/>
        <Button title='Начинаем' customStyles={customStylesButton}/>
    </ScreenBackground>
  );
}