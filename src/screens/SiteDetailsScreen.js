import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import FormField from '../components/FormField';
import TextArea from '../components/TextArea';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';

const SiteDetailsScreen = ({navigation, route}) => {
  const [siteDetails, setSiteDetails] = useState(route.params.item);
  return (
    <KeyboardAvoidingComponent>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={styles.siteHeader}>
            <Pressable
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Icon name="arrow-back-outline" size={24} color="#FFFFFF" />
            </Pressable>
            <Text style={styles.headerText}>Site Details</Text>
          </View>
          <Pressable
            style={styles.editButton}
            onPress={() => navigation.push('EditScreen', {siteDetails})}>
            <Text style={styles.editText}>Edit</Text>
          </Pressable>
        </View>
        <View style={styles.formFieldContainer}>
          <FormField label="URL" value={siteDetails.url} editable={false} />
          <FormField
            label="Site Name"
            value={siteDetails.siteName}
            editable={false}
          />
          <FormField
            label="Sector/Folder"
            value={siteDetails.folder}
            editable={false}
          />
          <FormField
            label="User Name"
            value={siteDetails.userName}
            editable={false}
          />
          <FormField
            label="Site Password"
            value={siteDetails.sitePassword}
            editable={false}
            isPasswordField={true}
          />
          <TextArea label="Notes" value={siteDetails.notes} editable={false} />
        </View>
      </View>
    </KeyboardAvoidingComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  siteHeader: {
    flexDirection: 'row',
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    height: 76,
    backgroundColor: '#0E85FF',
    paddingTop: 41,
    justifyContent: 'space-between',
    shadowColor: '#3C4857',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 20,
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
    marginTop: 43,
    marginBottom: 40,
  },
  button: {
    width: '50%',
    height: 55,
    backgroundColor: '#0E85FF',
    marginLeft: 1.5,
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
  editText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  editButton: {
    width: 35,
    height: 28,
    marginRight: 20,
  },
});

export default SiteDetailsScreen;
