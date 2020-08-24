import React from 'react';
import {storiesOf} from '@storybook/react-native';

import AnimatedBar from './index';

storiesOf('components/AnimatedBar', module)
  .add('default', () => (
    <AnimatedBar timer={5} />
  ));