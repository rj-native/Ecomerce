import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalData = (key, value) =>
  AsyncStorage.setItem(`${key}`, value);

export const getLocalData = (key) => AsyncStorage.getItem(key);

export const setToken = async (val) => {
  setLocalData('token', JSON.stringify(val));
};

export const getToken = async () => {
  try {
    const tokenData = await getLocalData('token');
    const item = JSON.parse(tokenData);
    return item;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const removeLocalData = async (key) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error.message);
  }
};
