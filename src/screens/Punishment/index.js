import React, {useCallback} from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {ScreenBackground, TextBackground, Button} from 'src/components';

import {changeIndex} from 'src/reducers/usersSlice';

import imgBeer from 'src/assets/images/beer.png';

import getRandomInt from 'src/helps';

import punishments from 'src/punishments.json';

import styles from './styles';

export default function Punishment({navigation}) {
  const {imgStyles, customContainer, customStyles} = styles;

  const {users: {players, currentPlayersIndex}} = useSelector((state) => state);
  const {name} = players[currentPlayersIndex];
  const dispatch = useDispatch();

  const punishmentsLength = punishments.length;
  const index = getRandomInt(punishmentsLength)
  const punishment = punishments[index];

  const navigatingThroughScreens = useCallback(() => {
    const isUserLast = players.length === currentPlayersIndex + 1
    dispatch(changeIndex());
    if (isUserLast) {
      navigation.navigate('ResultTable');
    } else {
      navigation.navigate('Questions');
    }
  }, []);

  return (
    <ScreenBackground>
      <Image source={imgBeer} style={imgStyles} />
      <TextBackground
        title={`${name}, ` + `${punishment}`}
        customContainer={customContainer}
      />
      <Button
        title="Продолжаем"
        customStyles={customStyles}
        onPress={navigatingThroughScreens}
      />
    </ScreenBackground>
  );
}

Punishment.propTypes = {
  navigation: PropTypes.object,
};
