import React, {useState, useCallback} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {changeCategory} from 'src/reducers/categorySlice';

import {
  ScreenBackground,
  Timer,
  Button,
  CategoriesList,
  ModalList,
} from 'src/components';

import styles from './styles';

export default function StartGame({navigation}) {
  const {
    textStyles,
    customStyles,
    customTitleStyles,
    customStylesСategories,
  } = styles;

  const [isShowModal, setShowModal] = useState(false);

  const {category} = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleModal = useCallback(
    (newCategory) => {
      setShowModal(!isShowModal);
      if (typeof newCategory === 'string') {
        dispatch(changeCategory(newCategory));
      }
    },
    [isShowModal],
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
      <Timer />
      <Text style={textStyles}>Kатегория</Text>
      <Button
        title={category}
        customStyles={customStylesСategories}
        onPress={toggleModal}
        testID={'button-category'}
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
  navigation: PropTypes.object,
};
