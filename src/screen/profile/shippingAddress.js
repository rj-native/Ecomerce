import { ScrollView, StyleSheet, Text, View } from 'react-native';

import BackArrow from 'react-native-vector-icons/FontAwesome';
import PlusCircle from 'react-native-vector-icons/FontAwesome';
import { CustomButton } from '../../components';
import { CardList } from '../../components/card';
import { Colors, FontFamily, FontSize } from '../../globalStyles';
import { moderateScale } from '../../utils';

import { useState } from 'react';

export const ShippingAddress = ({ navigation }) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'John Doe',
      address: '3 Newbridge Court  Chino Hills',
      states: 'CA 91709, United States',
      checked: false,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'John Doe',
      address: '3 Newbridge Court  Chino Hills',
      states: 'CA 91709, United States',
      checked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'John Doe',
      address: '51 Riverside Chino Hills',
      states: 'CA 91709, United States',
      checked: false,
    },
  ];

  const [data, setData] = useState(DATA);

  // const handleChangeCheckbox = (e, i) => {
  //   data.filter((abc) => {
  //     if (abc.id === i) {
  //       abc.checked = e;
  //       setData({ ...data, ...abc });
  //     }
  //   });
  // };

  const showCard = ({ item }) => {
    return (
      <View style={styles.item}>
        <CustomButton
          title={'Edit'}
          style={styles.button}
          color={Colors.reddishbrown}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.address}>{item.states}</Text>

        {/* <CheckBox
          id={`custom-checkbox-${index}`}
          onValueChange={(a) => handleChangeCheckbox(a, item.id)}
          value={item.checked}
        />
        <Text style={{ color: 'black' }}>Use as the shipping address</Text> */}
      </View>
    );
  };

  const BackToProfile = () => {
    navigation.goBack();
  };

  const AddingAddress = () => {
    navigation.navigate('addingshipping');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <BackArrow
            name="chevron-left"
            onPress={BackToProfile}
            style={styles.iconStyle}
          />
          <Text style={styles.headingStyle}>Shipping Addresses</Text>
        </View>

        <CardList
          data={data}
          renderItem={({ item, index }) => (
            <View style={styles.cardstyle}>
              {showCard({
                index,
                item,
                array: data,
              })}
            </View>
          )}
        />

        <View style={styles.icon}></View>
        <PlusCircle
          name="plus-circle"
          style={styles.plusIcon}
          onPress={AddingAddress}
        />
        {/* <CheckBox value={isSelected} onValueChange={setSelection} /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  headingStyle: {
    fontFamily: FontFamily.semiBold,
    color: Colors.black,
    fontSize: FontSize.h4,
    alignItems: 'center',
    marginTop: moderateScale(20),
    marginRight: 40,
  },
  plusIcon: {
    fontSize: FontSize.h3,
    color: Colors.black,

    marginLeft: 380,
    // marginBottom: 150,
  },
  icon: {
    flexDirection: 'row',
  },
  firstaddress: {
    backgroundColor: Colors.white,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: 'flex',
  },
  title: {
    color: Colors.black,
    fontFamily: FontFamily.semiBold,
  },
  subtitle: {
    color: Colors.black,
  },

  cardstyle: {
    marginVertical: 10,
    shadowRadius: 4,
    shadowOpacity: 0.4,

    borderWidth: 0.2,
    borderRadius: 4,
    marginHorizontal: moderateScale(8),

    borderColor: 'white',
    backgroundColor: 'white',
  },
  iconStyle: {
    // marginLeft: 20,
    marginTop: 33,

    fontSize: FontSize.lable,
    color: Colors.black,
  },
  button: {
    color: Colors.reddishbrown,
    alignItems: 'flex-end',
  },
  address: {
    color: 'black',
  },
});
