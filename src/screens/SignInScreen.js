import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import fingerprintIcon from '../../assets/images/fingerprintIcon.png';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Mobile Number" />
      <Input placeholder="MPin" style={styles.mPinInput} />
      <Pressable>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </Pressable>
      <Button title="SIGN IN" style={styles.button} />
      <View style={styles.fingerprintIconContiner}>
        <Image source={fingerprintIcon} />
      </View>
      <Pressable>
        <Text style={styles.boldText}>
          OR {'\t'}
          <Text style={styles.plainText}>USE YOUR FINGERPRINT TO LOGIN</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E85FF',
    marginTop: 43,
    padding: 30,
  },
  mPinInput: {
    marginVertical: 26,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 39,
  },
  fingerprintIconContiner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 59,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 14,
    fontSize: 18,
    textAlign: 'left',
  },
  plainText: {
    color: '#FFFFFF',
    fontSize: 13,
    textAlign: 'left',
  },
});

export default SignInScreen;
