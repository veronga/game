import React from 'react';
import { Text } from 'react-native';


import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';



storiesOf('Button', module)
  .addDecorator(getStory => getStory(<Text>😀 😎 👍 💯</Text>))
  .add('with text', (a) => (
    <Button onPress={action('clicked-text')}>
        {a}
    </Button>
  ))
  .add('with some emoji', (a) => (
    <Button onPress={action('clicked-emoji')}>
      {a}
    </Button>
  ));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);








