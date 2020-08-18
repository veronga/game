import React from 'react';
import { storiesOf } from '@storybook/react-native';

import AddButton from './index'

storiesOf('AddButton', module)
.add('default view', () => (
  <AddButton/>
))
