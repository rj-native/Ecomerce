import { useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BackArrow from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton, CustomInput } from '../../components';
import { Colors, FontFamily, FontSize } from '../../globalStyles';
import { changePasswordAction } from '../../services/userAPI';
import { moderateScale } from '../../utils';

export const ChangePassword = ({ navigation }) => {
  const { userDetail } = useSelector((state) => state?.auth);
  const { loading } = useSelector((state) => state?.auth);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  const dispatch = useDispatch();

  const BackToProfile = () => {
    navigation.goBack();
  };

  const passwordValidation = () => {
    if (!oldPassword || !newPassword || !repeatNewPassword) {
      alert('Feilds cannot be empty');
    }
    if (newPassword != repeatNewPassword) {
      alert('Password not matched');
    } else {
      const userData = {
        oldPassword: oldPassword,
        password: newPassword,
        confirmedPassword: repeatNewPassword,
      };
      const userid = userDetail?._id;
      dispatch(changePasswordAction(userData, userid));
      setOldPassword('');
      setNewPassword('');
      setRepeatNewPassword('');
    }
    navigation.navigate('profile');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {loading ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ActivityIndicator color={Colors.black} size="large" />
          </View>
        ) : (
          <View>
            <BackArrow
              name="chevron-left"
              style={styles.iconStyle}
              onPress={BackToProfile}
            />
            <Text style={styles.headingStyle}>Password Change</Text>
            <CustomInput
              style={styles.boxStyle}
              placeholder={'Old Password'}
              value={oldPassword}
              onChange={setOldPassword}
              secureTextEntry={true}
              isSecure
            />
            <CustomInput
              style={styles.boxStyle}
              placeholder={'New Password'}
              value={newPassword}
              onChange={setNewPassword}
              secureTextEntry={true}
              isSecure
            />
            <CustomInput
              style={styles.boxStyle}
              placeholder={'Repeat New Password'}
              value={repeatNewPassword}
              onChange={setRepeatNewPassword}
              secureTextEntry={true}
              isSecure
            />
            <CustomButton
              title={'SAVE PASSWORD'}
              color={Colors.white}
              style={styles.buttonTitleDesign}
              onPress={passwordValidation}
            ></CustomButton>
          </View>
        )}
      </View>
    </ScrollView>
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
    height: moderateScale(70),
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
