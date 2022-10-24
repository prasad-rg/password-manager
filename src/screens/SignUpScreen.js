import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';
import Button from '../components/Button';
import Input from '../components/Input';
import {Formik} from 'formik';
import * as yup from 'yup';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../redux/auth';

const loginValidationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .matches(/(\d){10}\b/, 'Enter a valid phone number')
    .max(10, ({max}) => `Mobile Number must be ${max} characters`)
    .required('Mobile Number is required'),
  mPin: yup
    .string()
    .max(4, ({max}) => `MPin must be ${max} characters`)
    .matches(/(\d){4}\b/, 'Enter a valid 4 digit MPin')
    .required('MPin is required'),
  confirmMPin: yup
    .string()
    .max(4, ({max}) => `MPin must be ${max} characters`)
    .matches(/(\d){4}\b/, 'Enter a valid 4 digit MPin')
    .required('MPin is required'),
});

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth);

  return (
    <KeyboardAvoidingComponent>
      <View style={styles.container}>
        <View style={styles.singUpComponentHolder}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{mPin: '', mobileNumber: '', confirmMPin: ''}}
            onSubmit={values => {
              if (!isLoggedIn) {
                dispatch(signUp(values));
                Toast.show(
                  '\t Congrtats!!! Success \n    Signed Up  to access the vault',
                );
              }
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <>
                <Input
                  placeholder="Enter Mobile Number"
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
                  placeholder="Enter 4 digit MPin"
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
                <Input
                  placeholder="Re-Enter 4 digit MPin"
                  style={styles.mPinInput}
                  isPasswordField={true}
                  name="confirmMPin"
                  onChangeText={handleChange('confirmMPin')}
                  value={values.confirmMPin}
                  keyboardType="number-pad"
                  onBlur={handleBlur('confirmMPin')}
                />
                {errors.confirmMPin && (
                  <Text style={styles.errorText}>{errors.confirmMPin}</Text>
                )}
                <Button
                  title="SIGN IN"
                  style={styles.button}
                  onPress={handleSubmit}
                />
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
  singUpComponentHolder: {
    marginTop: 14,
    flex: 1,
  },
  mPinInput: {
    paddingLeft: 26,
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
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});

export default SignUpScreen;
