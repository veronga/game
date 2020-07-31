import React from 'react';
import { storiesOf } from '@storybook/react-native';


import BackgroundForText from './index'



storiesOf('BackgroundForText', module)

.add('default', () => (
    <BackgroundForText title='Игрок 1, назовите три места где бы вы хотели заняться сексом '/>
  ));