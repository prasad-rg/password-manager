import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import fingerprintIcon from '../../assets/images/fingerprintIcon.png';
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';
import Toast from 'react-native-simple-toast';

const SignInScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingComponent>
      <View style={styles.container}>
        <View style={styles.singInComponentHolder}>
          <Input placeholder="Mobile Number" />
          <Input placeholder="MPin" style={styles.mPinInput} />
          <Pressable>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          </Pressable>
          <Button
            title="SIGN IN"
            style={styles.button}
            onPress={() => {
              Toast.show(
                '\t Congrtats!!! Success \n    Signin  to access the vault',
              );
              navigation.navigate('PasswordManager');
            }}
          />
          <View style={styles.fingerprintIconContiner}>
            <Image source={fingerprintIcon} />
          </View>
          <Pressable>
            <Text style={styles.boldText}>
              OR {'\t'}
              <Text style={styles.plainText}>
                USE YOUR FINGERPRINT TO LOGIN
              </Text>
            </Text>
          </Pressable>
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
  singInComponentHolder: {
    marginTop: 43,
    flex: 1,
  },
  mPinInput: {
    marginVertical: 26,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-Semibold',
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
    fontFamily: 'OpenSans-Bold',
    color: '#FFFFFF',
    marginTop: 14,
    fontSize: 18,
    textAlign: 'left',
  },
  plainText: {
    color: '#FFFFFF',
    fontSize: 13,
    textAlign: 'left',
    fontFamily: 'OpenSans-Semibold',
  },
});

export default SignInScreen;
