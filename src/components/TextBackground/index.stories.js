import React from 'react';
import { storiesOf } from '@storybook/react-native';


import TextBackground from './index'



storiesOf('components/BackgroundForText', module)

.add('default', () => (
    <TextBackground title='Игрок 1, назовите три места где бы вы хотели заняться сексом '/>
  ));