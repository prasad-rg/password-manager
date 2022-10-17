import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

import logo from '../../assets/images/logo.png';
import SignInScreen from '../screens/SignInScreen';

const AuthScreenHolder = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerText}>PASS {'\n'} MANAGER</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B4FF',
  },
  logo: {
    width: 57,
    height: 67,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    margin: 14,
    color: '#FBFBFB',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AuthScreenHolder;
