import React from 'react';
import { storiesOf } from '@storybook/react-native';

import AddButton from './index'

storiesOf('components/AddButton', module)
.add('default', () => (
  <AddButton/>
))
