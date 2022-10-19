import React from 'react';
import {View, StyleSheet} from 'react-native';
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';
import Button from '../components/Button';
import Input from '../components/Input';

const SignUpScreen = () => {
  return (
    <KeyboardAvoidingComponent>
      <View style={styles.container}>
        <View style={styles.singUpComponentHolder}>
          <Input placeholder="Enter Mobile Number" />
          <Input placeholder="Enter 4 digit MPin" style={styles.mPinInput} />
          <Input placeholder="Re-Enter 4 digit MPin" style={styles.mPinInput} />
          <Button title="SIGN IN" style={styles.button} />
        </View>
      </View>
    </KeyboardAvoidingComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  singUpComponentHolder: {
    marginTop: 43,
    flex: 1,
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
    marginTop: 47,
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

export default SignUpScreen;
