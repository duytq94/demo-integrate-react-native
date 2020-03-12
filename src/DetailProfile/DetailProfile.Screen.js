import React, {Component} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './DetailProfile.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class DetailProfileScreen extends Component {
  handleBackPress = () => {
    this.props.navigation.goBack();
    return true;
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.renderToolbar()}
        <Text style={styles.textContent}>
          Example this is the detail profile screen
        </Text>
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
          onPress={this.handleBackPress}>
          <MaterialCommunityIcons
            name={'arrow-left'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Detail profile</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailProfileScreen);
