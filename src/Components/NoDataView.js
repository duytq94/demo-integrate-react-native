import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontFamily, fontSize} from '../const';
import colors from '../Themes/Colors';

const NoDataView = props => {
  return (
    <View style={styles.viewNoData}>
      <MaterialCommunityIcons
        name={'information-outline'}
        size={64}
        color={colors.grey}
      />
      <Text style={styles.textNoData}>No data</Text>
      <TouchableOpacity style={styles.btnRetry} onPress={props.onRetryPress}>
        <Text style={styles.textRetry}>Try again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewNoData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNoData: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.grey,
  },
  btnRetry: {
    marginTop: 20,
    width: 150,
    height: 45,
    borderRadius: 30,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRetry: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.demiBold,
    color: colors.primary,
  },
});

export default NoDataView;
