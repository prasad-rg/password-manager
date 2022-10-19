import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const FormField = ({
  label = 'URL',
  onChangeText,
  value,
  editable = true,
  secureTextEntry = false,
  name,
  isPasswordField,
}) => {
  const [isPasswordNotVisible, setIsPasswordNotVisible] =
    useState(isPasswordField);
  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputText}>
        <TextInput
          style={styles.formField}
          placeholderTextColor="#3C4858"
          onChangeText={onChangeText}
          value={value}
          editable={editable}
          secureTextEntry={isPasswordNotVisible}
          name={name}
        />
        {isPasswordField && (
          <Icon
            name={isPasswordNotVisible ? 'eye' : 'eye-with-line'}
            style={styles.icon}
            color="#787E8C"
            size={24}
            onPress={() => {
              setIsPasswordNotVisible(!isPasswordNotVisible);
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formField: {
    width: '90%',
    height: 41,
    paddingLeft: 6,
    borderRadius: 4,
    color: '#3C4858',
  },
  formContainer: {
    width: '95%',
    marginTop: 20,
    justifyContent: 'center',
  },
  label: {
    color: '#949CA5',
    fontSize: 18,
  },
  icon: {
    paddingRight: 35,
  },
  inputText: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default FormField;
