import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Input from './index';
import {View} from 'react-native';

storiesOf('components/Input', module).add('default', () => (
  <View>
    <Input placeholder="Введите имя" />
    <Input placeholder="Введите имя" />
    <Input placeholder="Введите имя" />
    <Input placeholder="Введите имя" />
    <Input placeholder="Введите имя" />
  </View>
));
