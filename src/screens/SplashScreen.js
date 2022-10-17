import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import logo from '../../assets/images/logo.png';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E85FF',
  },
  logo: {
    width: 176,
    height: 204,
  },
});

export default SplashScreen;
