import React from 'react';
import {storiesOf} from '@storybook/react-native';

import  StartGame from './index';

storiesOf(' ListPlayers', module)
.add('default', () => (
  < StartGame />
));