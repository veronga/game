import React from 'react';
import { storiesOf } from '@storybook/react-native';


import Modal from './index'



storiesOf('Modal', module)

.add('default', () => (
    <Modal title='+18'/>
  ));