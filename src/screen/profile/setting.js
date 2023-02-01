import {useState} from 'react';
import {Image, StyleSheet, Switch, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Images} from '../../assets/images';
import {CustomInput} from '../../components';
import {Colors, FontFamily, FontSize} from '../../globalStyles';

export const Setting = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('*************');

  const [isEnabled, setIsEnabled] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [delivery, setIsDelivery] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const newSwitch = () => setIsNew(previousState => !previousState);
  const deliverySwitch = () => setIsDelivery(previousState => !previousState);

  return (
    <View style={styles.container}>
      <FontAwesome name="chevron-left" style={styles.iconStyle} />
      <View style={styles.heading}>
        <Text style={styles.headingStyle}>Settings</Text>
        <Text style={styles.subHeading}>Personal Information</Text>
      </View>
      <Image source={Images.profile} style={styles.profileImage} />
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
        <Text style={{marginLeft: 200}}>Change</Text>
      </View>
      <View>
        <CustomInput
          style={styles.boxStyle}
          placeholder={'Password'}
          value={password}
          onChange={setPassword}
        />
      </View>
      <View>
        <Text style={styles.notifi}>Notifications</Text>
      </View>
      <View>
        <View style={styles.flexDirectionStyle}>
          <Text style={styles.list}>Sales</Text>
          <Switch
            trackColor={{false: Colors.grayButton, true: Colors.white}}
            thumbColor={isEnabled ? Colors.green : Colors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.toggleButtonOne}
          />
        </View>
        <View style={styles.flexDirectionStyle}>
          <Text style={styles.list}>New Arrivals</Text>
          <Switch
            trackColor={{false: Colors.grayButton, true: Colors.white}}
            thumbColor={isNew ? Colors.green : Colors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={newSwitch}
            value={isNew}
            style={styles.toggleButtonTwo}
          />
        </View>
        <View style={styles.flexDirectionStyle}>
          <Text style={styles.list}>Delivery status changes</Text>
          <Switch
            trackColor={{false: Colors.grayButton, true: Colors.white}}
            thumbColor={delivery ? Colors.green : Colors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={deliverySwitch}
            value={delivery}
            style={styles.toggleButtonThree}
          />
        </View>
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
    color: Colors.black,
    fontSize: FontSize.h1,
  },
  heading: {
    marginLeft: 20,
    marginTop: 28,
  },
  subHeading: {
    fontFamily: FontFamily.semiBold,
    color: Colors.black,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    alignSelf: 'center',
  },
  boxStyle: {
    height: 55,
    marginHorizontal: 17,
    marginVertical: 12,
    backgroundColor: Colors.white,
    marginTop: 20,
    borderRadius: 4,
    shadowOpacity: 0.2,
  },
  passwordstyle: {
    marginLeft: 20,
    fontFamily: FontFamily.semiBold,
    color: Colors.black,
  },
  notifi: {
    marginLeft: 20,
    fontFamily: FontFamily.semiBold,
    color: Colors.black,
  },
  list: {
    marginLeft: 20,
    marginVertical: 10,
    color: Colors.black,
  },
  toggleButtonOne: {
    marginLeft: 253,
  },
  toggleButtonTwo: {
    marginLeft: 210,
  },
  toggleButtonThree: {
    marginLeft: 140,
  },
  iconStyle: {
    marginLeft: 20,
    fontSize: 20,
    marginTop: 30,
  },
  flexDirectionStyle: {
    flexDirection: 'row',
  },
});
