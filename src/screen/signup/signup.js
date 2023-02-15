import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton, CustomInput } from '../../components';
import { Colors, FontFamily, FontSize } from '../../globalStyles';
import { createUserAction } from '../../services/authAPI';
import { moderateScale, validateEmail } from '../../utils';

export const Signup = ({ navigation }) => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [fullName, setFullName] = useState('');

  const backHandler = () => {
    navigation.navigate('Login');
  };

  const handleSubmit = () => {
    const data = validationSign();
    if (data?.length) {
      alert(data);
      return;
    }

    const body = {
      username: fullName,
      password: pass,
      email: mail,
    };
    dispatch(createUserAction(body));
    setMail('');
    setPass('');
    setFullName('');
  };

  const validationSign = () => {
    if (!mail || !pass || !fullName) {
      return 'Please enter all fields';
    }
    if (mail && !validateEmail(mail)) {
      return 'Please enter vaild email id';
    }
    if (fullName.length < 2) {
      return 'Name must be long';
    }
    if (pass.length < 6) {
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
          <Text style={styles.title}>Sign up</Text>
          <View style={styles.shadowStyle}>
            <CustomInput
              value={fullName}
              onChange={setFullName}
              placeholder={'Full Name'}
              style={styles.inputText}
              placeholderTextColor={Colors.gray}
              color={Colors.black}
            />
          </View>
          <View style={styles.shadowStyle}>
            <CustomInput
              value={mail}
              onChange={setMail}
              placeholder={'Email'}
              style={styles.inputText}
              placeholderTextColor={Colors.gray}
              keyboardType={'email-address'}
              color={Colors.black}
            />
          </View>
          <View style={styles.shadowStyle}>
            <CustomInput
              value={pass}
              onChange={setPass}
              placeholder={'Password'}
              style={styles.inputText}
              placeholderTextColor={Colors.gray}
              secureTextEntry={true}
              color={Colors.black}
              isSecure
            />
          </View>
          <CustomButton
            title={'Already have an account?'}
            color={Colors.reddishbrown}
            style={styles.loginButton}
            onPress={backHandler}
          />

          <View style={styles.underlineLogin} />
          <CustomButton
            title={'SIGN UP'}
            color={Colors.white}
            style={styles.buttonTitleDesign}
            onPress={handleSubmit}
          ></CustomButton>
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
  },
  buttonTitleDesign: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.reddishbrown,
    borderRadius: moderateScale(21),
    marginTop: moderateScale(30),
    height: moderateScale(40),
    width: '80%',
  },
  loginButton: {
    alignSelf: 'center',
    marginTop: moderateScale(20),
    textAlign: 'right',
  },
  underlineLogin: {
    alignSelf: 'center',
    height: 0.8,
    backgroundColor: Colors.reddishbrown,
    width: '45%',
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
