import React from 'react';
import {View, StyleSheet, Text, Pressable, ScrollView} from 'react-native';
import FormField from '../components/FormField';
import TextArea from '../components/TextArea';
import Icon from 'react-native-vector-icons/Ionicons';

const EditScreen = ({navigation, route}) => {
  const siteDetails = route.params.siteDetails;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.navBar}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerText}>Edit</Text>
      </View>
      <View style={styles.formFieldContainer}>
        <FormField label="URL" value={siteDetails.url} />
        <FormField label="Site Name" value={siteDetails.siteName} />
        <FormField label="Sector/Folder" value={siteDetails.folder} />
        <FormField label="User Name" value={siteDetails.userName} />
        <FormField
          label="Site Password"
          value={siteDetails.sitePassword}
          secureTextEntry={true}
        />
        <TextArea label="Notes" value={siteDetails.notes} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    width: 400,
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
    marginTop: 43,
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
