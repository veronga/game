import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Timer from './index'

storiesOf('components/Timer', module)
.add('default', () => (
  <Timer title='5'/>
))
