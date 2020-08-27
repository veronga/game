import React from 'react';
import {Text} from 'react-native';

import ScreenBackground from '../../components/ScreenBackground';
import Input from '../../components/Input';
import AddButton from '../../components/AddButton';
import Button from '../../components/Button';

import styles from './styles';

export default function ListPlayers() {
  const {textStyles, customStyles} = styles;

  return (
    <ScreenBackground>
      <Text style={textStyles}>Список игроков</Text>
      <Input placeholder="Введите имя" />
      <AddButton />
      <Button title='Дальше' customStyles={customStyles}/>
    </ScreenBackground>
  );
}
