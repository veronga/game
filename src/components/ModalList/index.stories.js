import React from 'react';
import {storiesOf} from '@storybook/react-native';

import ModalList from './index';

storiesOf('components/CategoriesLists', module)
.add('default', () => (
  <ModalList  />
));
