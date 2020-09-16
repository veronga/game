import React from 'react';
import {storiesOf} from '@storybook/react-native';

import  Questions from './index';

storiesOf('screens/Questions', module)
.add('default', () => (
  < Questions />
));