import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const {
  borderBottom,
  borderTop,
  container,
  stylesText,
  containerPoint,
  stylesPoint,
} = styles;

export default function LeaderBoard({ players}) {
  return players.map((item, index, arr) => {
    const borberStyle =
      index === 0 ? borderTop : index === arr.length - 1 ? borderBottom : null;

    return (
      <View key={item} style={[container, borberStyle]}>
        <Text style={stylesText}>{item.name}</Text>
        <View style={containerPoint}>
          <Text style={stylesPoint}>{item.point}</Text>
        </View>
      </View>
    );
  });
}

LeaderBoard.propTypes = {
  players: PropTypes.string.isRequired,
};
