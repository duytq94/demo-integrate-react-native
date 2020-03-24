import React, {Component} from 'react';
import {
  ActivityIndicator,
  BackHandler,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './Profile.Style';
import {getProfileRequest} from './Profile.Action';
import NoDataView from '../Components/NoDataView';
import colors from '../Themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {barStyle} from '../const';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getProfile: {fetching: false, data: null, err: null},
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {getProfile: nextProps.getProfile};
  }

  getUserProfile = () => {
    this.props.onCallApi(getProfileRequest('duytq94'));
  };

  goDetail = () => {
    this.props.navigation.navigate('DetailProfileScreen');
  };

  onMenuPress = () => {
    this.props.navigation.openDrawer();
  };

  onExitPress = () => {
    BackHandler.exitApp();
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.renderToolbar()}

        <TouchableOpacity
          style={styles.btnGetData}
          onPress={this.getUserProfile}>
          <Text style={styles.textGetData}>Get profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnGetData} onPress={this.goDetail}>
          <Text style={styles.textGetData}>Go detail</Text>
        </TouchableOpacity>

        {this.renderDataView()}

        {this.state.getProfile.fetching ? (
          <View style={styles.viewLoading}>
            <ActivityIndicator />
          </View>
        ) : null}
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
          <Text style={styles.titleToolbar}>Profile</Text>
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

  renderDataView = () => {
    if (this.state.getProfile.data) {
      return (
        <View style={styles.body}>
          <Image
            style={styles.avatar}
            source={{uri: this.state.getProfile.data.avatar_url}}
          />
          <Text style={styles.textData}>
            {this.state.getProfile.data.login}
          </Text>
          <Text style={styles.textData}>{this.state.getProfile.data.name}</Text>
          <Text style={styles.textData}>
            {this.state.getProfile.data.location}
          </Text>
        </View>
      );
    } else if (this.state.getProfile.err) {
      return <NoDataView onRetryPress={this.getUserProfile} />;
    } else {
      return null;
    }
  };
}

const mapStateToProps = state => {
  return {
    getProfile: state.getProfile,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCallApi: object => dispatch(object),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
