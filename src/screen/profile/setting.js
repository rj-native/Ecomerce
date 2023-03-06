import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackArrow from 'react-native-vector-icons/FontAwesome';
import Calender from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';

import { Images } from '../../assets/images';
import { CustomButton, CustomInput, DatePickers } from '../../components';
import { ToggleButton } from '../../components/toggleButton/toggleButton';
import { Colors, FontFamily, FontSize } from '../../globalStyles';
import { moderateScale } from '../../utils';
import { changeProfileAction } from '../../services/userAPI';
import { getUserAction } from '../../services/authAPI';

export const Setting = ({ navigation }) => {
  const { userDetail } = useSelector((state) => state?.auth);

  const [name, setName] = useState(userDetail?.username);
  const [isSale, setIsSale] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [delivery, setIsDelivery] = useState(false);
  const [imageUri, setImageURI] = useState('');
  const [date, setDate] = useState(new Date(userDetail?.DOB));
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
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
      type: 'image/jpeg/jpg/png',
    },
  };

  const openImagePicker = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        const imageAssetsArray = response.assets[0];
        setImageURI(imageAssetsArray);
      }
    });
  };
  const BackToProfile = () => {
    navigation.goBack();
  };

  const updateHandler = () => {
    const userDetails = {
      username: name,
      DOB: date,
    };
    const userid = userDetail._id;
    dispatch(changeProfileAction(userDetails, userid));
  };

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  const dt = new Date(userDetail?.DOB);
  const dataa = dt?.toLocaleDateString('en-US');

  return (
    <ScrollView>
      <View style={styles.container}>
        <BackArrow
          name="chevron-left"
          style={styles.iconStyle}
          onPress={BackToProfile}
        />
        <View style={styles.heading}>
          <Text style={styles.headingStyle}>Settings</Text>
          <Text style={styles.subHeading}>Personal Information</Text>
        </View>
        <TouchableOpacity onPress={openImagePicker}>
          <Image
            source={!imageUri ? Images.profile : imageUri}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <CustomInput
          style={styles.boxStyle}
          placeholder={'Full name'}
          value={name}
          onChange={setName}
          color={Colors.black}
        />
        <DatePickers
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          editable={false}
        />
        <View style={styles.boxStyle}>
          <CustomInput
            placeholder={'Date of Birth'}
            value={dataa}
            onChange={() => setDate()}
            color={Colors.black}
          />
          <Calender
            name="calendar"
            onPress={() => setOpen(true)}
            style={styles.calenderStyle}
          />
        </View>

        <Text style={styles.notifi}>Notifications</Text>
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
        <CustomButton
          title={'UPDATE'}
          color={Colors.white}
          style={styles.updateButtonStyle}
          onPress={updateHandler}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginTop: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.reddishbrown,
    borderRadius: moderateScale(21),
    height: moderateScale(40),
    width: '60%',
    fontFamily: FontFamily.metropolisRegulas,
  },
  calenderStyle: {
    marginTop: moderateScale(20),
    color: Colors.black,
  },
});
