import React from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import ImageButton from 'src/components/ImageButton';

import styles from './styles';

import minus from 'src/assets/images/Minus.png';

export default function Input({
  value,
  placeholder,
  onChangeText,
  customStyles,
  onRemoveButtonPress,
  isDecreaseDisabled,
  index,
}) {
  const {container, inputStyles} = styles;

  return (
    <View style={[container, customStyles]}>
      <TextInput
        style={inputStyles}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        testID={`input-${index}`}
      />
      <ImageButton
        imagePath={minus}
        onPress={onRemoveButtonPress}
        isDecreaseDisabled={isDecreaseDisabled}
        testID={`remove-button-${index}`}
      />
    </View>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  customStyles: PropTypes.object.isRequired,
  onRemoveButtonPress: PropTypes.func.isRequired,
  isDecreaseDisabled: PropTypes.bool.isRequired,
  index: PropTypes.string,
};
