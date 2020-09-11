import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import categories from '../../categories.json';

export default function CategoriesList({onPress}) {
  console.log("CategoriesList -> onPress", onPress)
  const {container, stylesText, borderTop, borderBottom} = styles;

  return categories.map((category, index, arr) => {
    const borberStyle =
      index === 0 ? borderTop : index === arr.length - 1 ? borderBottom : null;
    return (
      <TouchableOpacity onPress={onPress} key={category}>
        <View style={[container, borberStyle]}>
          <Text style={stylesText}>{category}</Text>
        </View>
      </TouchableOpacity>
    );
  });
}

CategoriesList.propTypes = {
  category: PropTypes.string,
  onPress: PropTypes.func,
};
