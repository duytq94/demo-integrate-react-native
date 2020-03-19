import React, {Component} from 'react';
import {
  TextInput,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  NativeModules
} from 'react-native';
import {connect} from 'react-redux';
import styles from './TestConnectNative.Style';
import colors from '../Themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {barStyle} from '../const';
import TestConnectNative from "./TestConnectNative";

class TestConnectNativeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageToNative: ""
    }
  }

  onExitPress = () => {

  };

  sendMessageToNative = () => {
    TestConnectNative.sendMessageToNative(this.state.messageToNative);
  };

  sendCallbackToNative = () => {
    TestConnectNative.sendCallbackToNative((nativeMessage) => {
      console.log(`This log is from js code callback with native message: "${nativeMessage}"`);
    });
  };

  onMenuPress = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.renderToolbar()}
        <TextInput
          style={styles.textInput}
          placeholder={"Typing some messages to native..."}
          onChangeText={newText => this.setState({messageToNative: newText})}
        />
        <Text style={styles.textInfo}>Check log to see the result</Text>
        <TouchableOpacity
          style={styles.btnSend}
          onPress={this.sendMessageToNative}>
          <Text style={styles.textBtnSend}>Send message to native</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSend}
          onPress={this.sendCallbackToNative}>
          <Text style={styles.textBtnSend}>Send callback to native</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <StatusBar
          hidden={false}
          backgroundColor={colors.primary}
          barStyle={barStyle.lightContent}
        />
        <TouchableOpacity
          style={styles.viewWrapIcLeft}
          onPress={this.onMenuPress}>
          <MaterialCommunityIcons
            name={'menu'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Test connect native</Text>
        </View>
        <TouchableOpacity
          style={styles.viewWrapIcRight}
          onPress={this.onExitPress}>
          <MaterialCommunityIcons
            name={'exit-to-app'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>
    );
  };


}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onCallApi: object => dispatch(object),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestConnectNativeScreen);
