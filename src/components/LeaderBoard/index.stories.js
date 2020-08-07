  
import React from 'react';
import { storiesOf } from '@storybook/react-native';


import Modal from './index'



storiesOf('LeaderBoard', module)

.add('default', () => (
    <Modal name='React' point={3}/>
  ));