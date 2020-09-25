import {AppRegistry} from 'react-native';
import {getStorybookUI, configure} from '@storybook/react-native';

import {loadStories} from './storyLoader';

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  port: '7007',
  host: 'localhost',
  onDeviceUI: false,
});

AppRegistry.registerComponent('game', () => StorybookUIRoot);

export default StorybookUIRoot;
