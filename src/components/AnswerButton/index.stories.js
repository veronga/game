import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {text, withKnobs} from '@storybook/addon-knobs';


import AnswerButton from './index';

storiesOf('components/AnswerButton', module)
  .addDecorator(withKnobs)
  .add('answered', () => (
    <AnswerButton
      title={text('title', 'title')}
      custombackgroundColor={{backgroundColor: '#32A574'}}
    />
  ))
  .add('did not answer', () => (
    <AnswerButton
      title="Не ответил(а)"
      custombackgroundColor={{backgroundColor: '#E45B70'}}
    />
  ));
