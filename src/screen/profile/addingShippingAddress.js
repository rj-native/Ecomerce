import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily, FontSize } from '../../globalStyles';
import { moderateScale } from '../../utils';
import BackArrow from 'react-native-vector-icons/FontAwesome';
import { CustomButton, CustomInput } from '../../components';

export const AddingShippingAddress = ({ navigation }) => {
  const BackToProfile = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View>
        <BackArrow
          name="chevron-left"
          style={styles.iconStyle}
          onPress={BackToProfile}
        />
        <Text style={styles.headingStyle}>Password Change</Text>
        <CustomInput
          style={styles.boxStyle}
          placeholder={''}
          //   value={oldPassword}
          //   onChange={setOldPassword}
          secureTextEntry={true}
          isSecure
        />
        <CustomInput
          style={styles.boxStyle}
          placeholder={'New Password'}
          //   value={newPassword}
          //   onChange={setNewPassword}
          secureTextEntry={true}
          isSecure
        />
        <CustomInput
          style={styles.boxStyle}
          placeholder={'Repeat New Password'}
          //   value={repeatNewPassword}
          //   onChange={setRepeatNewPassword}
          secureTextEntry={true}
          isSecure
        />
        <CustomButton
          title={'SAVE PASSWORD'}
          color={Colors.white}
          style={styles.buttonTitleDesign}
        ></CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.profileBackground,
  },
  headingStyle: {
    fontFamily: FontFamily.semiBold,
    marginTop: moderateScale(35),
    fontSize: FontSize.small,
    color: Colors.black,
    fontSize: FontSize.h1,
    textAlign: 'center',
  },
  boxStyle: {
    height: moderateScale(45),
    marginHorizontal: moderateScale(17),
    marginVertical: moderateScale(12),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(4),
    shadowOpacity: 0.2,
  },
  buttonTitleDesign: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.reddishbrown,
    borderRadius: moderateScale(21),
    marginTop: moderateScale(40),
    height: moderateScale(40),
    width: '90%',
    fontFamily: FontFamily.metropolisRegulas,
  },
  iconStyle: {
    marginLeft: moderateScale(20),
    fontSize: moderateScale(20),
    marginTop: moderateScale(30),
  },
});
