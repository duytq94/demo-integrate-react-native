import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../Profile/Profile.Screen';
import FollowerScreen from '../Follower/Follower.Screen';
import React, {Component} from 'react';
import colors from '../Themes/Colors';
import styles from './DrawerNavigator.Style';
import TestConnectNativeScreen from '../TestConnectNative/TestConnectNative.Screen';

const Drawer = createDrawerNavigator();

export class DrawerNavigatorScreen extends Component {
  render() {
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: colors.primary,
          labelStyle: styles.textItemMenu,
        }}>
        <Drawer.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{drawerLabel: 'Profile'}}
        />
        <Drawer.Screen
          name="FollowerScreen"
          component={FollowerScreen}
          options={{drawerLabel: 'Follower'}}
        />
        <Drawer.Screen
          name="TestConnectNativeScreen"
          component={TestConnectNativeScreen}
          options={{drawerLabel: 'Test connect native'}}
        />
      </Drawer.Navigator>
    );
  }
}
