import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {dropDownFilter} from '../redux/passManager';

const DropDown = ({
  count = '07',
  categories = ['All', 'Work', 'Streaming', 'Social Media'],
}) => {
  const {value} = useSelector(state => state.passManager);
  const dispatch = useDispatch();
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [category, setCategory] = useState('All');

  const handelDropDownPress = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const handelDropDownSelect = item => {
    setCategory(item);
    dispatch(dropDownFilter(item));
    handelDropDownPress();
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={handelDropDownPress}>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {value.length > 0 && value.length < 10
              ? `0${value.length}`
              : value.length}
          </Text>
        </View>
        <Icon
          color="#0E85FF"
          name="keyboard-arrow-down"
          size={22}
          style={styles.dropDown}
        />
      </TouchableOpacity>
      {isDropDownVisible &&
        categories.map(categoryValues => (
          <TouchableOpacity
            onPress={() => handelDropDownSelect(categoryValues)}
            key={categoryValues.length}>
            <Text style={styles.category}>{categoryValues}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  categoryContainer: {
    flexDirection: 'row',
  },
  category: {
    fontSize: 19.2,
    color: '#3C4857',
    fontFamily: 'OpenSans-Regular',
    // marginVertical: 4,
  },
  badge: {
    backgroundColor: '#0E85FF',
    borderRadius: 20,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 29,
    height: 29,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'OpenSans-Semibold',
  },
  dropDown: {
    marginLeft: 6.8,
  },
});

export default DropDown;
