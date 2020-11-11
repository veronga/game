import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import questions from 'src/questions.json';

export default function CategoriesList({onPress}) {
  const {container, stylesText, borderTop, borderBottom} = styles;

  const categories = Object.keys(questions);

  return categories.map((category, index, arr) => {
    const borberStyle =
      index === 0 ? borderTop : index === arr.length - 1 ? borderBottom : null;
    return (
      <TouchableOpacity
        onPress={() => onPress(category)}
        key={category}
        activeOpacity={0.5}
        testID={`category-${index}`}
        >
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
