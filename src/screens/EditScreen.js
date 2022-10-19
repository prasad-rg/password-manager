import React from 'react';
import {View, StyleSheet, Text, Pressable, ScrollView} from 'react-native';
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import FormField from '../components/FormField';
import TextArea from '../components/TextArea';
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';
import Toast from 'react-native-simple-toast';
import {updatePasswordDetails} from '../redux/passManager';

const EditSiteValidationSchema = yup.object().shape({
  url: yup
    .string()
    .required('Please Enter a valid URL')
    .required('URL is Required'),
  sitePassword: yup.string().required('Password is required'),
});

const EditScreen = ({navigation, route}) => {
  const siteDetails = route.params.siteDetails;
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingComponent>
      <ScrollView style={styles.container}>
        <View style={styles.navBar}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={24} color="#FFFFFF" />
          </Pressable>
          <Text style={styles.headerText}>Edit</Text>
        </View>
        <Formik
          validationSchema={EditSiteValidationSchema}
          initialValues={{
            url: siteDetails.url,
            sitePassword: siteDetails.sitePassword,
            folder: siteDetails.folder,
            userName: siteDetails.userName,
            siteName: siteDetails.siteName,
            notes: siteDetails.notes,
          }}
          onSubmit={(values, {resetForm}) => {
            values = {
              ...values,
              id: siteDetails.id,
              icon: siteDetails.icon ? siteDetails.icon : '',
              title: values.siteName.substring(4, values.siteName.length - 4),
            };
            dispatch(updatePasswordDetails(values));
            navigation.navigate('PasswordManager');
            Toast.show('Updated Successfully');
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
                  value={values.url}
                  onChangeText={handleChange('url')}
                />
                <FormField
                  label="Site Name"
                  value={values.siteName}
                  onChangeText={handleChange('siteName')}
                />
                <FormField
                  label="Sector/Folder"
                  value={values.folder}
                  onChangeText={handleChange('folder')}
                />
                <FormField
                  label="User Name"
                  value={values.userName}
                  onChangeText={handleChange('userName')}
                />
                <FormField
                  label="Site Password"
                  value={values.sitePassword}
                  onChangeText={handleChange('sitePassword')}
                  isPasswordField={true}
                />
                <TextArea
                  label="Notes"
                  value={values.notes}
                  onChangeText={handleChange('notes')}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Update</Text>
                </Pressable>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: '25%',
    marginBottom: 0,
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#0E85FF',
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
});

export default EditScreen;
