import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async item => {
  try {
    const jsonValue = JSON.stringify(item.mPin);
    await AsyncStorage.setItem(item.mobileNumber, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export const validateCredentials = async item => {
  const data = await getData(item.mobileNumber);
  if (data === item.mPin) {
    return true;
  } else {
    return false;
  }
};

export const authorize = async () => {
  try {
    const jsonValue = JSON.stringify(true);
    await AsyncStorage.setItem('auth', jsonValue);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const deAuthorize = async () => {
  try {
    await AsyncStorage.removeItem('auth');
  } catch (e) {
    console.log(e);
  }
};
