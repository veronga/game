import React from 'react';
import {storiesOf} from '@storybook/react-native';

import GameTime from './index';

storiesOf('GameTime', module)
.add('default', () => <GameTime timer={16}/>);
