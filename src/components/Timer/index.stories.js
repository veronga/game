import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Timer from './index'

storiesOf('Timer', module)
.add('default view', () => (
  <Timer title='5'/>
))
