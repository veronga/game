import React, {useState, useCallback} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import ScreenBackground from '../../components/ScreenBackground';
import Input from '../../components/Input';
import AddButton from '../../components/AddButton';
import Button from '../../components/Button';

import styles from './styles';

export default function ListPlayers({navigation}) {
  const {textStyles, customStyles, borderTop, textError} = styles;
  const [userInputs, setUserInputs] = useState([
    {inputValue: ''},
    {inputValue: ''},
  ]);
  const [error, setError] = useState('');
  const isDecreaseDisabled = userInputs.length === 2;

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
          />
        );
      })}
      <AddButton onPress={addMember} />
      <Text style={textError}>{error}</Text>
      <Button
        title="Дальше"
        customStyles={customStyles}
        onPress={navigatingThroughScreens}
      />
    </ScreenBackground>
  );
}

ListPlayers.propTypes = {
  navigation: PropTypes.object.isRequired,
};
