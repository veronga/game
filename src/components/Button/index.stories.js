import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Button from './index'

storiesOf('components/Button', module)
.add('default', () => (
  <Button title='Привет'/>
))
