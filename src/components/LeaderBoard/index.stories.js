  
import React from 'react';
import { storiesOf } from '@storybook/react-native';


import Modal from './index'

 const  players = [ 
  {name:'Влад',point: 4},
  {name:'Вероника',point: 7},
  {name:'Аня',point: 9},
  {name:'Питук',point: 5},
  {name:'Дима',point: 4},
  {name:'Женя',point: 8},

]

storiesOf('LeaderBoard', module)

.add('default', () => (
    <Modal players={players}/>
  ));