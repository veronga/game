import React from 'react';
import {storiesOf} from '@storybook/react-native';

import ScreenBackground from './index';

storiesOf('components/ScreenBackground', module)
.add('default', () => (
  <ScreenBackground />
));