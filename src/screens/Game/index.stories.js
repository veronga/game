import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Game from './index';

storiesOf('Game', module)
.add('default', () => <Game timer={16}/>);
