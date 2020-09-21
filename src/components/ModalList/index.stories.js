import React from 'react';
import {storiesOf} from '@storybook/react-native';

import ModalList from './index';

storiesOf('components/ModalList', module)
.add('default', () => (
  <ModalList  />
));
