// If TestConnectNative is an package from npm, you can think this is index.js file
import {NativeModules, Platform} from 'react-native';

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
      testConnectNative.dismissViewController(tag);
    } else {
      testConnectNative.finishActivity();
    }
  },

  goToNative: tag => {
    if (Platform.OS === 'ios') {
      testConnectNative.goToSecondViewController(tag);
    } else {
      testConnectNative.goToSecondActivity();
    }
  },
};

export default TestConnectNative;
