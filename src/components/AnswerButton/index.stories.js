import React from 'react';
import {storiesOf} from '@storybook/react-native';

import AnswerButton from './index';

storiesOf('AnswerButton', module)
  .add('ответил', () => (
    <AnswerButton
      title="Ответил(а)"
      custombackgroundColor={{backgroundColor: '#32A574'}}
    />
  ))
  .add('не ответил', () => (
    <AnswerButton
      title="Не ответил(а)"
      custombackgroundColor={{backgroundColor: '#E45B70'}}
    />
  ));
