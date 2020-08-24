import React from 'react';
import {storiesOf} from '@storybook/react-native';

import ImageButton from './index';

storiesOf('components/ImageButton', module)
  .add('minus', () => (
    <ImageButton imagePath={require('../../assets/images/Minus.png')} />
  ))
  .add('plus', () => (
    <ImageButton imagePath={require('../../assets/images/Plus.png')} />
  ));
