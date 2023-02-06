import {moderateScale} from '../../utils';

export const FontFamily = {
  black: 'Poppins-Black',
  blackItalic: 'Poppins-BlackItalic',
  extraBoldItalic: 'Poppins-ExtraBoldItalic',
  extraLight: 'Poppins-ExtraLight',
  extraLightItalic: 'Poppins-ExtraLightItalic',
  semiBold: 'Poppins-SemiBold',
  metropolisRegulas: 'Metropolis-Regular',
};

export const FontSize = {
  h1: moderateScale(30),
  h2: moderateScale(28),
  h3: moderateScale(26),
  h4: moderateScale(24),
  h5: moderateScale(22),
  h6: moderateScale(20),
  title: moderateScale(18),
  body: moderateScale(16),
  lable: moderateScale(15),
  small: moderateScale(14),
  mini: moderateScale(12),
  micro: moderateScale(10),
};
