import React from 'react';
import {View, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
const countries = ['All', 'Work', 'Streaming', 'Social Media'];

const FormFieldDropDown = ({onSelect, defaultValue}) => {
  return (
    <SelectDropdown
      data={countries}
      defaultValue={defaultValue}
      onSelect={onSelect}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
      defaultButtonText="Sector/Folder"
      renderDropdownIcon={() => (
        <Icon name="keyboard-arrow-down" color="#0E85FF" size={24} />
      )}
      buttonStyle={styles.dropDownBtn}
      buttonTextStyle={styles.buttonText}
      rowStyle={styles.rowStyle}
      dropdownStyle={styles.dropDown}
      rowTextStyle={styles.buttonText}
    />
  );
};

const styles = StyleSheet.create({
  dropDownBtn: {
    width: '90%',
    borderRadius: 4,
    backgroundColor: '#F5F7FB',
    height: 41,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'left',
    fontFamily: 'OpenSans-Regular',
  },
  rowStyle: {
    width: '90%',
    height: 40,
    borderRadius: 4,
  },
  dropDown: {
    borderRadius: 4,
    backgroundColor: '#F5F7FB',
  },
});

export default FormFieldDropDown;
