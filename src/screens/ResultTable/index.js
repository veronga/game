import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import ScreenBackground from '../../components/ScreenBackground';
import LeaderBoard from '../../components/LeaderBoard';
import Button from '../../components/Button';

import styles from './styles';

export default function ResultTable({players, navigation}) {
  const {textStyles, customStyles, customTitleStyles} = styles;

  const navigatingThroughScreens = useCallback(() => {
    navigation.navigate('Questions');
  }, []);

  return (
    <ScreenBackground>
      <Text style={textStyles}>Результы</Text>
      <LeaderBoard players={players} />
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

ResultTable.propTypes = {
  players: PropTypes.string.isRequired,
  navigation: PropTypes.func.isRequired,
};
