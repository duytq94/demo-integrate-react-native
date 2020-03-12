import {StyleSheet} from 'react-native';
import {fontFamily, fontSize} from '../const';
import ApplicationStyle from '../Themes/Application.Style';
import colors from '../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,

  textItemMenu: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
    color: colors.primary,
    marginLeft: 12,
  },
});
