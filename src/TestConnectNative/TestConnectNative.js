// If TestConnectNative is an package from npm, you can think this is index.js file
import {NativeModules} from "react-native"

const testConnectNative = NativeModules.TestConnectNative;

const TestConnectNative = {
  sendMessageToNative: (msg) => {
    testConnectNative.sendMessageToNative(msg);
  },
  sendCallbackToNative: (callback) => {
    testConnectNative.sendCallbackToNative(callback);
  }
};

export default TestConnectNative
