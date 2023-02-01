import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';

import { Images } from '../../assets/images';
import { CustomButton, CustomInput } from '../../components';
import { ToggleButton } from '../../components/toggleButton/toggleButton';
import { Colors, FontFamily, FontSize } from '../../globalStyles';
import { moderateScale } from '../../utils';

export const Setting = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState();

  const [isSale, setIsSale] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [delivery, setIsDelivery] = useState(false);
  const [imageUri, setImageURI] = useState('');

  const saleSwitch = () => setIsSale((previousState) => !previousState);
  const arrivalSwitch = () => {
    setIsNew((previousState) => !previousState);
  };
  const deliverySwitch = () => setIsDelivery((previousState) => !previousState);
  const trackColor = {
    false: Colors.grayButton,
    true: Colors.white,
  };

  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const openImagePicker = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
        console.log('response.error', response.error);
      } else {
        const imageAssetsArray = response.assets[0].uri;
        setImageURI(imageAssetsArray);
        console.log(imageAssetsArray, 'imageAssetsArray');
      }
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <FontAwesome name="chevron-left" style={styles.iconStyle} />
        <View style={styles.heading}>
          <Text style={styles.headingStyle}>Settings</Text>
          <Text style={styles.subHeading}>Personal Information</Text>
        </View>
        <TouchableOpacity onPress={openImagePicker}>
          <Image
            source={!imageUri ? Images.profile : { uri: imageUri }}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <View>
          <CustomInput
            style={styles.boxStyle}
            placeholder={'Full name'}
            value={name}
            onChange={setName}
          />
        </View>
        <View>
          <CustomInput
            style={styles.boxStyle}
            placeholder={'Date of Birth'}
            value={birth}
            onChange={setBirth}
          />
        </View>
        <View style={styles.flexDirectionStyle}>
          <Text style={styles.passwordstyle}>Password</Text>
          <Text>Change</Text>
        </View>
        <View>
          <CustomInput
            style={styles.boxStyle}
            placeholder={'Password'}
            value={password}
            onChange={setPassword}
            secureTextEntry={true}
            isSecure
          />
        </View>
        <View>
          <Text style={styles.notifi}>Notifications</Text>
        </View>
        <View>
          <View style={styles.toggleStyle}>
            <Text style={styles.list}>Sales</Text>
            <ToggleButton
              ios_backgroundColor="#3e3e3e"
              onValueChange={saleSwitch}
              value={isSale}
              style={styles.toggleButtonOne}
              trackColor={trackColor}
              thumbColor={isSale ? Colors.green : Colors.white}
            />
          </View>
          <View style={styles.toggleStyle}>
            <Text style={styles.list}>New Arrivals</Text>
            <ToggleButton
              ios_backgroundColor="#3e3e3e"
              onValueChange={arrivalSwitch}
              value={isNew}
              style={styles.toggleButtonTwo}
              trackColor={trackColor}
              thumbColor={isNew ? Colors.green : Colors.white}
            />
          </View>
          <View style={styles.toggleStyle}>
            <Text style={styles.list}>Delivery status changes</Text>
            <ToggleButton
              ios_backgroundColor="#3e3e3e"
              onValueChange={deliverySwitch}
              value={delivery}
              style={styles.toggleButtonThree}
              trackColor={trackColor}
              thumbColor={delivery ? Colors.green : Colors.white}
            />
          </View>
        </View>
        <CustomButton
          title={'UPDATE'}
          color={Colors.white}
          style={styles.updateButtonStyle}
        />
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
    color: Colors.black,
    fontSize: FontSize.h1,
  },
  heading: {
    marginLeft: moderateScale(20),
    marginTop: moderateScale(27),
  },
  subHeading: {
    fontFamily: FontFamily.semiBold,
    color: Colors.black,
  },
  profileImage: {
    height: moderateScale(90),
    width: moderateScale(90),
    borderRadius: moderateScale(50),
    alignSelf: 'center',
    marginTop: 10,
  },
  boxStyle: {
    height: moderateScale(55),
    marginHorizontal: moderateScale(17),
    marginVertical: moderateScale(12),
    backgroundColor: Colors.white,
    marginTop: moderateScale(20),
    borderRadius: moderateScale(4),
    shadowOpacity: 0.2,
  },
  passwordstyle: {
    marginLeft: moderateScale(20),
    fontFamily: FontFamily.semiBold,
    color: Colors.black,
  },
  notifi: {
    marginLeft: moderateScale(20),
    fontFamily: FontFamily.semiBold,
    color: Colors.black,
  },
  list: {
    marginLeft: moderateScale(20),
    marginVertical: moderateScale(10),
    color: Colors.black,
  },
  toggleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconStyle: {
    marginLeft: moderateScale(20),
    fontSize: moderateScale(20),
    marginTop: moderateScale(30),
  },
  flexDirectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: moderateScale(20),
  },
  updateButtonStyle: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.black,
    borderRadius: moderateScale(21),
    height: moderateScale(40),
    width: '60%',
    fontFamily: FontFamily.metropolisRegulas,
  },
});
