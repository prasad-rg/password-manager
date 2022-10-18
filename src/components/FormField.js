import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const FormField = ({
  label = 'URL',
  onChangeText,
  value,
  editable = true,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.formField}
        placeholderTextColor="#3C4858"
        onChangeText={onChangeText}
        value={value}
        editable={editable}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formField: {
    backgroundColor: '#F5F7FB',
    width: '90%',
    height: 41,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    paddingLeft: 6,
    borderRadius: 4,
    marginTop: 10.5,
    color: '#3C4858',
  },
  formContainer: {
    width: '95%',
    marginTop: 20,
  },
  label: {
    color: '#949CA5',
    fontSize: 18,
  },
});

export default FormField;
