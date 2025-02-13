import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import styles from './styles';

const {
  borderBottom,
  borderTop,
  container,
  stylesText,
  containerPoint,
  stylesPoint,
} = styles;

export default function LeaderBoard() {
  const {users: {players}} = useSelector((state) => state);
  return players.map((item, index, arr) => {
    const borberStyle =
      index === 0 ? borderTop : index === arr.length - 1 ? borderBottom : null;
    return (
      <View key={item} style={[container, borberStyle]}>
        <Text testID='usersName' style={stylesText}>{item.name}</Text>
        <View style={containerPoint}>
          <Text testID='usersScore' style={stylesPoint}>{item.score}</Text>
        </View>
      </View>
    );
  });
}

LeaderBoard.propTypes = {
  players: PropTypes.string,
};
