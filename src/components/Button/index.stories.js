import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Button from './index'

storiesOf('Button', module)
.add('default view', () => (
  <Button title='Привет'/>
))
.add('view', () => (
    <Button title='Привет'/>
  ));