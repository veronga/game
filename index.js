if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;
// export default from './storybook'

AppRegistry.registerComponent(appName, () => App);
