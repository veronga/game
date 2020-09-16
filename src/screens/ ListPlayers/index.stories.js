import React from 'react';
import {storiesOf} from '@storybook/react-native';

import  ListPlayers from './index';

storiesOf('screens/ListPlayers', module)
.add('default', () => (
  < ListPlayers />
));