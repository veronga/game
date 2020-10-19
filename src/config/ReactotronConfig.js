import Reactotron, {openInEditor} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

let reactotron;

if (__DEV__) {
  reactotron = Reactotron.configure({
    name: 'Game',
    port: 9090,
  })
    .useReactNative({
    })
    .use(reactotronRedux())
    .use(openInEditor())
    .connect();
  console.tron = Reactotron.log;
}

export default reactotron;
