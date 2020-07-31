import React from 'react';
import { storiesOf } from '@storybook/react-native';

import ImageButton from './index'

import Minus from '../../assets/images/Minus.png'
import Plus from '../../assets/images/Plus.png'


storiesOf('ImageButton', module)
.add('minus', () => (
  <ImageButton source={Minus}/>
))
.add('plus', () => (
    <ImageButton source={Plus}/>
  ));