import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import ScreenBackground from '../../components/ScreenBackground';
import LeaderBoard from '../../components/LeaderBoard';
import Button from '../../components/Button';

import styles from './styles';

export default function ResultTable({players}) {
  const {textStyles, customStyles, customTitleStyles} = styles;

  return (
    <ScreenBackground>
      <Text style={textStyles}>бубубубубуб</Text>
      <LeaderBoard players={players} />
      <Button
        title="Играть"
        customStyles={customStyles}
        customTitleStyles={customTitleStyles}
        image
      />
    </ScreenBackground>
  );
}

ResultTable.propTypes = {
  players: PropTypes.string.isRequired,
};
