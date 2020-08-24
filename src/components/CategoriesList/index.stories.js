import React from 'react';
import {storiesOf} from '@storybook/react-native';

import CategoriesList from './index';

storiesOf('components/CategoriesLists', module)
.add('default', () => (
  <CategoriesList />
));
