import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import imgUrl from '../../assets/images/Bitmap.png';

const ListView = ({
  title = 'Facebook',
  url = 'www.facebook.com',
  uri,
  copyPasswordText,
  handelListPress,
}) => {
  return (
    <Pressable style={styles.listContainer} onPress={handelListPress}>
      <View style={styles.rowView}>
        <View>
          <Image source={uri ? uri : imgUrl} />
        </View>
        <View>
          <Text style={styles.siteText}>{title}</Text>
          <Pressable onPress={copyPasswordText}>
            <Text style={styles.copyPasswordText}>Copy Password</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.urlContainer}>
        <Text style={styles.urlText}>{url}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: 104,
    width: 320,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    elevation: 10,
    shadowColor: 'rgba(0,0,0,0.02)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 18,
    paddingTop: 10,
    paddingEnd: 10,
    width: 320,
    height: 68,
  },
  urlContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    overflow: 'hidden',
    fontSize: 14,
    height: 36,
    width: '100%',
  },
  siteText: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 18,
    color: '#0E85FF',
  },
  copyPasswordText: {
    // fontFamily: 'OpenSans-Regular',
    color: '#0E85FF',
    fontSize: 13,
  },
  urlText: {
    // fontFamily: 'OpenSans-Regular',
    color: '#3C4857',
  },
});

export default ListView;
