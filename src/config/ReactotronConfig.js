import Reactotron from 'reactotron-react-native';
import {AsyncStorage} from 'react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Game',
  })
  .use(reactotronRedux())
  .useReactNative({
    asyncStorage: true,
    editor: false,
    overlay: true,
  })
  .connect();

export default reactotron;
