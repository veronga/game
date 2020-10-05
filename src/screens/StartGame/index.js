import React, {useState, useCallback} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import ScreenBackground from '../../components/ScreenBackground';
import Timer from '../../components/Timer';
import Button from '../../components/Button';
import CategoriesList from '../../components/CategoriesList';
import ModalList from '../../components/ModalList';

import styles from './styles';

export default function StartGame({navigation}) {
  const {
    textStyles,
    customStyles,
    customTitleStyles,
    customStylesСategories,
  } = styles;
  const [isShowModal, setShowModal] = useState(false);
  const [changeTitle, setChangeTitle] = useState('Выберите категорию');
  const [secondStart, setSecondStart] = useState(5);

  const isDecreaseDisabled = secondStart <= 5 ;

  const toggleModal = useCallback(
    (category) => {
      setShowModal(!isShowModal);
      if (typeof category === 'string') setChangeTitle(category);
    },
    [isShowModal, changeTitle],
  );

  const navigatingThroughScreens = useCallback(() => {
    navigation.navigate('Questions');
  }, []);

  return (
    <ScreenBackground>
      <ModalList isShowModal={isShowModal}>
        <CategoriesList onPress={toggleModal} />
      </ModalList>
      <Text style={textStyles}>Таймер</Text>
      <Timer
        second={secondStart}
        isDecreaseDisabled={isDecreaseDisabled}
        changeTimer={setSecondStart}
      />

      <Button
        title={changeTitle}
        customStyles={customStylesСategories}
        onPress={toggleModal}
      />
      <Button
        title="Играть"
        customStyles={customStyles}
        customTitleStyles={customTitleStyles}
        isShowButtonIcon
        onPress={navigatingThroughScreens}
      />
    </ScreenBackground>
  );
}

StartGame.propTypes = {
  navigation: PropTypes.object.isRequired,
};
