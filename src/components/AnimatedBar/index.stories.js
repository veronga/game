import React from 'react';
import {storiesOf} from '@storybook/react-native';

import AnimatedBar from './index';

storiesOf('AnimatedBar', module)
  .add('дефолт', () => (
    <AnimatedBar timer={5} />
  ));