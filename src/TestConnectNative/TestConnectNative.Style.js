import {StyleSheet} from 'react-native';
import {fontFamily, fontSize} from '../const';
import ApplicationStyle from '../Themes/Application.Style';
import colors from '../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,
  textInput: {
    height: 50,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.boldGrey,
    margin: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnSend: {
    backgroundColor: colors.charcoalGrey,
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  textBtnSend: {
    fontFamily: fontFamily.regular,
    color: colors.white,
    fontSize: fontSize.medium,
  },
  textInfo: {
    fontFamily: fontFamily.regular,
    color: colors.charcoalGrey,
    fontSize: fontSize.medium,
    alignSelf: 'center',
  },
});
