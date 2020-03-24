// If TestConnectNative is an package from npm, you can think this is index.js file
import {BackHandler, NativeModules, Platform} from 'react-native';

const testConnectNative = NativeModules.TestConnectNative;

const TestConnectNative = {
  sendMessage: msg => {
    testConnectNative.sendMessageToNative(msg);
  },

  sendCallback: callback => {
    testConnectNative.sendCallbackToNative(callback);
  },

  exitRN: tag => {
    if (Platform.OS === 'ios') {
      testConnectNative.dismissPresentedViewController(tag);
    } else {
      BackHandler.exitApp();
    }
  },
};

export default TestConnectNative;
