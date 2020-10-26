import React, {useCallback} from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {ScreenBackground, TextBackground, Button} from 'src/components';

import styles from './styles';

import {changeIndex} from 'src/reducers/usersSlice';

import imgBeer from 'src/assets/images/beer.png';

export default function Punishment({navigation}) {
  const {imgStyles, customContainer, customStyles} = styles;

  const {users: {players, currentPlayersIndex}} = useSelector((state) => state);
  const {name} = players[currentPlayersIndex];
  const dispatch = useDispatch();

  const navigatingThroughScreens = useCallback(() => {
    if (players.length === currentPlayersIndex + 1) {
      navigation.navigate('ResultTable');
      dispatch(changeIndex());
    } else {
      navigation.navigate('Questions');
      dispatch(changeIndex());
    }
  }, []);

  return (
    <ScreenBackground>
      <Image source={imgBeer} style={imgStyles} />
      <TextBackground
        title={`${name}, ` + 'крабш'}
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
  navigation: PropTypes.object.isRequired,
};
