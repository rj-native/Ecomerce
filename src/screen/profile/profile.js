import * as React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RightArrow from 'react-native-vector-icons/FontAwesome';

import { Images } from '../../assets/images';
import { Colors, FontFamily, FontSize } from '../../globalStyles';

export const ProfileScreen = ({ navigation }) => {
  const NavigateToSetting = () => {
    navigation.navigate('setting');
  };
  const NavigateToChangePassword = () => {
    navigation.navigate('changePassword');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.headingStyle}>My Profile</Text>
        </View>
        <View style={styles.directionStyle}>
          <Image source={Images.profile} style={styles.profile}></Image>
          <View>
            <Text style={styles.nameStyle}>Matlida Brown</Text>
            <Text style={styles.mailStyle}>matildabrown@gmail.com</Text>
          </View>
        </View>
        <View style={styles.viewList}>
          <View style={styles.orderStyle}>
            <Text style={styles.listStyle}>My Orders</Text>
            <Text>Already have 12 orders</Text>
          </View>
          <View style={styles.orderImage}>
            <RightArrow name="chevron-right" style={styles.shape} />
          </View>
        </View>
        <View style={styles.underLineStyle} />
        <View style={styles.viewList}>
          <View style={styles.shippingStyle}>
            <Text style={styles.listStyle}>Shipping addresses</Text>
            <Text>3 addresses</Text>
          </View>
          <View style={styles.shippingImage}>
            <RightArrow name="chevron-right" style={styles.shape} />
          </View>
        </View>
        <View style={styles.underLineStyle} />
        <View style={styles.viewList}>
          <View style={styles.paymentStyle}>
            <Text style={styles.listStyle}>Payment methods</Text>
            <Text>Visa **34</Text>
          </View>
          <View style={styles.orderImage}>
            <RightArrow name="chevron-right" style={styles.shape} />
          </View>
        </View>
        <View style={styles.underLineStyle} />
        <View style={styles.viewList}>
          <View style={styles.paymentStyle}>
            <Text style={styles.listStyle}>Promocodes</Text>
            <Text>You have special Promocodes</Text>
          </View>
          <View style={styles.promoImage}>
            <RightArrow name="chevron-right" style={styles.shape} />
          </View>
        </View>
        <View style={styles.underLineStyle} />
        <View style={styles.viewList}>
          <View style={styles.reviewsStyle}>
            <Text style={styles.listStyle}>My reviews</Text>
            <Text>Reviews of 4 items</Text>
          </View>
          <View style={styles.orderImage}>
            <RightArrow name="chevron-right" style={styles.shape} />
          </View>
        </View>
        <View style={styles.underLineStyle} />
        <TouchableOpacity onPress={NavigateToSetting}>
          <View style={styles.viewList}>
            <View style={styles.paymentStyle}>
              <Text style={styles.listStyle}>Settings</Text>
              <Text>Notifications</Text>
            </View>

            <View style={styles.settingImage}>
              <RightArrow name="chevron-right" style={styles.shape} />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.underLineStyle} />
        <TouchableOpacity onPress={NavigateToChangePassword}>
          <View style={styles.viewList}>
            <View style={styles.paymentStyle}>
              <Text style={styles.listStyle}>Change Password</Text>
              <Text>Password</Text>
            </View>
            <View style={styles.orderImage}>
              <RightArrow name="chevron-right" style={styles.shape} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profile: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginLeft: 20,
  },
  shape: {
    fontSize: FontSize.lable,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.whitish,
  },
  headingStyle: {
    fontFamily: FontFamily.semiBold,
    marginTop: 45,
    marginLeft: 20,
    fontSize: FontSize.h1,
    color: Colors.black,
  },
  nameStyle: {
    marginVertical: 5,
    marginLeft: 10,
    color: Colors.black,
    FontSize: FontSize.lable,
    fontFamily: FontFamily.semiBold,
  },
  listStyle: {
    color: Colors.black,
    FontSize: FontSize.lable,
    fontFamily: FontFamily.semiBold,
  },
  viewList: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  underLineStyle: {
    height: 1,
    backgroundColor: Colors.gray90,
    width: '100%',
  },
  directionStyle: {
    flexDirection: 'row',
  },
  mailStyle: {
    marginLeft: 10,
  },
  orderStyle: {
    marginTop: 20,
  },
  orderImage: {
    marginTop: 30,
  },
  shippingStyle: {
    marginTop: 5,
  },
  shippingImage: {
    marginTop: 22,
  },
  paymentStyle: {
    marginTop: 10,
  },
  promoImage: {
    marginTop: 23,
  },
  reviewsStyle: {
    marginTop: 10,
  },
  settingImage: {
    marginTop: 25,
  },
});
