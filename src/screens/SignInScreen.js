import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, Alert} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import fingerprintIcon from '../../assets/images/fingerprintIcon.png';
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';
import Toast from 'react-native-simple-toast';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/auth';

const loginValidationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .max(10, ({max}) => `Mobile Number must be ${max} characters`)
    .matches(/(\d){10}\b/, 'Enter a valid phone number')
    .required('Mobile Number is required'),
  mPin: yup
    .string()
    .max(4, ({max}) => `MPin must ${max} characters`)
    .matches(/(\d){4}\b/, 'Enter a valid 4 digit MPin')
    .required('MPin is required'),
});

const SignInScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth);
  return (
    <KeyboardAvoidingComponent>
      <View style={styles.container}>
        <View style={styles.singInComponentHolder}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{mPin: '', mobileNumber: ''}}
            onSubmit={values => {
              if (!isLoggedIn) {
                dispatch(login(values));
                if (isLoggedIn === true) {
                  Toast.show(
                    '\t Congrtats!!! Success \n    Signin  to access the vault',
                  );
                }
              }
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <>
                <Input
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  onChangeText={handleChange('mobileNumber')}
                  value={values.mobileNumber}
                  keyboardType="number-pad"
                  onBlur={handleBlur('mobileNumber')}
                />
                {errors.mobileNumber && (
                  <Text style={styles.errorText}>{errors.mobileNumber}</Text>
                )}
                <Input
                  placeholder="MPin"
                  style={styles.mPinInput}
                  isPasswordField={true}
                  name="mPin"
                  onChangeText={handleChange('mPin')}
                  value={values.mPin}
                  keyboardType="number-pad"
                  onBlur={handleBlur('mPin')}
                />
                {errors.mPin && (
                  <Text style={styles.errorText}>{errors.mPin}</Text>
                )}
                <Pressable>
                  <Text style={styles.forgotPasswordText}>
                    Forgot your password?
                  </Text>
                </Pressable>
                {isLoggedIn === null && (
                  <Text style={[styles.errorText, styles.invalidMessage]}>
                    Invalid Credentials
                  </Text>
                )}
                <Button
                  title="SIGN IN"
                  style={styles.button}
                  onPress={handleSubmit}
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
              </>
            )}
          </Formik>
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
    marginTop: 17,
    flex: 1,
  },
  mPinInput: {
    paddingLeft: 26,
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
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  invalidMessage: {
    marginTop: 10,
    fontSize: 20,
  },
});

export default SignInScreen;
