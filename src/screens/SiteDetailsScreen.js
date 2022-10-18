import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import FormField from '../components/FormField';
import TextArea from '../components/TextArea';
import Icon from 'react-native-vector-icons/Ionicons';

const SiteDetailsScreen = ({navigation, route}) => {
  const [siteDetails, setSiteDetails] = useState(route.params.item);
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerText}>Site Details</Text>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate('EditScreen', {siteDetails})}>
          <Text style={[styles.headerText, {marginLeft: 130}]}>Edit</Text>
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
          secureTextEntry={true}
        />
        <TextArea label="Notes" value={siteDetails.notes} editable={false} />
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
});

export default SiteDetailsScreen;
