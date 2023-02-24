import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton, CustomInput } from '../../components';
import { Colors, FontFamily, FontSize } from '../../globalStyles';
import { loginAction } from '../../services/authAPI';
import { validateEmail, moderateScale } from '../../utils';

export const Login = ({ navigation }) => {
  const { loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitValidate = () => {
    const dataValidated = validateData();
    if (dataValidated?.length) {
      alert(dataValidated);
      return;
    } else {
      const user = {
        password: password,
        email: email,
      };
      dispatch(loginAction(user));
      setEmail('');
      setPassword('');
    }
  };

  const submitHandler = () => {
    navigation.navigate('SignUp');
  };

  const validateData = () => {
    if (!email || !password) {
      return 'Please enter email id and password';
    }
    if (email && !validateEmail(email)) {
      return 'Please enter vaild email id';
    }
    if (password.length < 6) {
      return 'Password must be 6 character';
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator color={Colors.black} size="large" />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Login</Text>
          <View style={styles.shadowStyle}>
            <CustomInput
              onChange={setEmail}
              value={email}
              placeholder={'Email'}
              style={styles.inputText}
              placeholderTextColor={Colors.gray}
              keyboardType={'email-address'}
              color={Colors.black}
            />
          </View>
          <View style={styles.shadowStyle}>
            <CustomInput
              onChange={setPassword}
              value={password}
              placeholder={'Password'}
              style={styles.inputText}
              placeholderTextColor={Colors.gray}
              secureTextEntry={true}
              color={Colors.black}
              isSecure
            />
          </View>
          <CustomButton
            title={'LOGIN'}
            color={Colors.white}
            style={styles.buttonTitleDesign}
            onPress={submitValidate}
          ></CustomButton>
          <CustomButton
            title={'CREATE ACCOUNT'}
            onPress={submitHandler}
            numberOfLines={1}
            style={styles.reuseableButton}
            color={Colors.reddishbrown}
          />
          <View style={styles.underLineCreate} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: FontSize.h4,
    color: Colors.black,
    marginTop: moderateScale(90),
    textAlign: 'center',
    fontFamily: FontFamily.metropolisRegulas,
  },
  inputText: {
    paddingBottom: moderateScale(3),
    marginHorizontal: moderateScale(20),
    placeholderTextColor: Colors.gray,
    borderBottomColor: Colors.white,
    borderBottomWidth: moderateScale(2),
    fontFamily: FontFamily.metropolisRegulas,
  },
  buttonTitleDesign: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.reddishbrown,
    borderRadius: moderateScale(21),
    marginTop: moderateScale(40),
    height: moderateScale(40),
    width: '80%',
    fontFamily: FontFamily.metropolisRegulas,
  },
  reuseableButton: {
    marginHorizontal: moderateScale(50),
    alignSelf: 'center',
    width: '30%',
    marginTop: moderateScale(120),
    fontWeight: FontFamily.extraBoldItalic,
    fontFamily: FontFamily.metropolisRegulas,
  },
  underLineCreate: {
    alignSelf: 'center',
    height: 1,
    backgroundColor: Colors.reddishbrown,
    marginTop: 1,
    width: '34%',
  },
  shadowStyle: {
    marginVertical: moderateScale(15),
    shadowRadius: 3,
    shadowOpacity: 0.2,
    height: moderateScale(50),
    borderWidth: 0.2,
    borderRadius: 3,
    marginHorizontal: moderateScale(20),
    backgroundColor: 'white',
    borderColor: 'white',
  },
});
