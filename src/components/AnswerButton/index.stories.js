import React from 'react';
import {storiesOf} from '@storybook/react-native';

import AnswerButton from './index';

storiesOf('components/AnswerButton', module)
  .add('answered', () => (
    <AnswerButton
      title="Ответил(а)"
      custombackgroundColor={{backgroundColor: '#32A574'}}
    />
  ))
  .add('did not answer', () => (
    <AnswerButton
      title="Не ответил(а)"
      custombackgroundColor={{backgroundColor: '#E45B70'}}
    />
  ));
