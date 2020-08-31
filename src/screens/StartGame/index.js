import React, {useState, useCallback} from 'react';
import {Text, Image} from 'react-native';

import ScreenBackground from '../../components/ScreenBackground';
import Timer from '../../components/Timer';
import Button from '../../components/Button';
import CategoriesList from '../../components/CategoriesList';
import ModalList from '../../components/ModalList';

import styles from './styles';

export default function StartGame() {
  const {
    textStyles,
    customStyles,
    customTitleStyles,
    imageStyle,
    customStylesСategories,
  } = styles;
  const [isShowModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(!isShowModal);
  }, []);

  return (
    <ScreenBackground>
      <ModalList isShowModal={isShowModal}>
        <CategoriesList onPress={toggleModal} />
      </ModalList>

      <Text style={textStyles}>Таймер</Text>
      <Timer title="5" />

      <Button
        title="Выберите категорию"
        customStyles={customStylesСategories}
        onPress={toggleModal}
      />
      <Button
        title="Играть"
        customStyles={customStyles}
        customTitleStyles={customTitleStyles}
      />

      <Image
        source={require('../../assets/images/Play.png')}
        style={imageStyle}
      />
    </ScreenBackground>
  );
}
