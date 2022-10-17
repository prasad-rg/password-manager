import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const FormField = () => {
  return (
    <TextInput
      placeholder="Test"
      style={styles.formField}
      placeholderTextColor="#3C4858"
    />
  );
};

const styles = StyleSheet.create({
  formField: {
    backgroundColor: '#F5F7FB',
    width: '90%',
    height: 41,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    padding: 19,
    borderRadius: 4,
    marginTop: 10.5,
    color: '#3C4858',
  },
});

export default FormField;
