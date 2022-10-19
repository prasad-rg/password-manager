import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';
import FormField from '../components/FormField';
import TextArea from '../components/TextArea';
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';
import {addNewPassword} from '../redux/passManager';
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';
import Toast from 'react-native-simple-toast';
const AddSiteValidationSchema = yup.object().shape({
  url: yup
    .string()
    .required('Please Enter a valid URL')
    .required('URL is Required'),
  sitePassword: yup.string().required('Password is required'),
});

const AddSiteScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingComponent>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={24} color="#FFFFFF" />
          </Pressable>
          <Text style={styles.headerText}>Add Site</Text>
        </View>
        <Formik
          validationSchema={AddSiteValidationSchema}
          initialValues={{
            url: '',
            sitePassword: '',
            folder: '',
            userName: '',
            siteName: '',
            notes: '',
          }}
          onSubmit={(values, {resetForm}) => {
            values = {
              ...values,
              id: uuid.v4(),
              icon: '',
              title: values.siteName.substring(4, values.siteName.length - 4),
            };
            dispatch(addNewPassword(values));
            navigation.navigate('PasswordManager');
            Toast.show('Saved Successfully');
          }}
          onReset={({resetForm}) => resetForm()}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            handleReset,
          }) => (
            <>
              <View style={styles.formFieldContainer}>
                <FormField
                  label="URL"
                  name="url"
                  onChangeText={handleChange('url')}
                  value={values.url}
                />
                {errors.url && (
                  <Text style={styles.errorText}>{errors.url}</Text>
                )}
                <FormField
                  label="Site Name"
                  name="siteName"
                  onChangeText={handleChange('siteName')}
                  value={values.siteName}
                />
                <FormField
                  label="Sector/Folder"
                  name="folder"
                  onChangeText={handleChange('folder')}
                  value={values.folder}
                />
                <FormField
                  label="User Name"
                  name="userName "
                  onChangeText={handleChange('userName')}
                  value={values.userName}
                />
                <FormField
                  label="Site Password"
                  name="sitePassword"
                  onChangeText={handleChange('sitePassword')}
                  value={values.sitePassword}
                  isPasswordField={true}
                />
                {errors.sitePassword && (
                  <Text style={styles.errorText}>{errors.sitePassword}</Text>
                )}
                <TextArea
                  label="Notes"
                  name="notes"
                  onChangeText={handleChange('notes')}
                  value={values.notes}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={handleReset}>
                  <Text style={styles.buttonText}>Reset</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handleSubmit()}>
                  <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
              </View>
            </>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  test: {
    flex: 1,
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    height: 76,
    backgroundColor: '#0E85FF',
    paddingTop: 41,
  },
  headerText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    marginLeft: 32,
  },
  formFieldContainer: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: '25%',
    // marginBottom: 40,
    // bottom: -50,
  },
  button: {
    width: '50%',
    height: 55,
    backgroundColor: '#0E85FF',
    marginRight: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
  },
  backButton: {
    marginLeft: 16,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});

export default AddSiteScreen;
