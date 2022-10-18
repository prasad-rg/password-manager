import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import FormField from '../components/FormField';
import TextArea from '../components/TextArea';

const AddSiteScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>{'<'}-</Text>
        </Pressable>
        <Text style={styles.headerText}>Add Site</Text>
      </View>
      <View style={styles.formFieldContainer}>
        <FormField />
        <FormField label="Site Name" />
        <FormField label="Sector/Folder" />
        <FormField label="User Name" />
        <FormField label="Site Password" />
        <TextArea label="Notes" />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
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
});

export default AddSiteScreen;
