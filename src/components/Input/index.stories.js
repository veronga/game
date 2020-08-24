import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Input from './index';

storiesOf('components/Input', module)
.add('default', () => (
  <Input placeholder="Введите имя" />
));
