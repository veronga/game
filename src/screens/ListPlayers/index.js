import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';

import {ScreenBackground, Input, AddButton, Button} from 'src/components';

import {addUsers} from 'src/reducers/usersSlice';

import styles from './styles';

export default function ListPlayers({navigation}) {
  const {textStyles, customStyles, borderTop, textError} = styles;
  const [userInputs, setUserInputs] = useState([
    {inputValue: ''},
    {inputValue: ''},
  ]);
  const [error, setError] = useState('');
  const isDecreaseDisabled = userInputs.length === 2;
  const dispatch = useDispatch();

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  });

  const addMember = useCallback(() => {
    const newList = [...userInputs, {inputValue: ''}];
    setUserInputs(newList);
  }, [userInputs]);

  const checkInputsFilling = userInputs.reduce((acc, current) => {
    if (current.inputValue.length > 0) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const navigatingThroughScreens = useCallback(() => {
    if (checkInputsFilling >= 2) {
      navigation.navigate('StartGame');
      const users = userInputs.map((item) => ({
        name: item.inputValue,
        score: 0,
      }));
      dispatch(addUsers(users));
    } else {
      setError('Пожалуйста введите как минимум имена двоих участноков');
    }
  }, [checkInputsFilling]);

  return (
    <ScreenBackground>
      <Text style={textStyles}>Список игроков</Text>
      {userInputs.map((item, index) => {
        const onChangeText = (text) => {
          const result = [...userInputs];
          result[index].inputValue = text;
          setUserInputs(result);
        };
        const onRemoveButtonPress = () => {
          const result = [...userInputs];
          result.splice(index, 1);
          setUserInputs(result);
        };
        const borderInput = index === 0 && borderTop;
        return (
          <Input
            placeholder="Введите имя"
            value={item.inputValue}
            onChangeText={onChangeText}
            key={index}
            onRemoveButtonPress={onRemoveButtonPress}
            customStyles={borderInput}
            isDecreaseDisabled={isDecreaseDisabled}
            index={index}
          />
        );
      })}
      <AddButton onPress={addMember} />
      <Text testID={`error`} style={textError}>
        {error}
      </Text>
      <Button
        title="Дальше"
        customStyles={customStyles}
        onPress={navigatingThroughScreens}
      />
    </ScreenBackground>
  );
}

ListPlayers.propTypes = {
  navigation: PropTypes.object,
};
