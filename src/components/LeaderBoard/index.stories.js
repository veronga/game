  
import React from 'react';
import { storiesOf } from '@storybook/react-native';


import LeaderBoard from './index'

 const  players = [ 
  {name:'Влад',point: 4},
  {name:'Вероника',point: 7},
  {name:'Аня',point: 9},
  {name:'Питук',point: 5},
  {name:'Дима',point: 4},
  {name:'Женя',point: 8},

]

storiesOf('components/LeaderBoard', module)

.add('default', () => (
    <LeaderBoard players={players}/>
  ));