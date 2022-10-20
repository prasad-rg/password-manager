import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import burgerMenuIcon from '../../assets/images/burger_menu.png';
import passManagerIcon from '../../assets/images/PASS_MANAGER.png';
import searchIcon from '../../assets/images/search.png';
import dataSyncIcon from '../../assets/images/sync_icn.png';
import profileIcon from '../../assets/images/profile.png';
import ListView from '../components/ListView';
import FloatingActionButton from '../components/FloatingActionButton';
import Clipboard from '@react-native-clipboard/clipboard';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from '../components/SearchBar';
import Toast from 'react-native-simple-toast';
import {deletePassword, filterList} from '../redux/passManager';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import DropDown from '../components/DropDown';

const PasswordManagerScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {value} = useSelector(state => state.passManager);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const confirmAlert = item =>
    Alert.alert(
      'Delete',
      `Do you want to delete password for ${item.title} ?`,
      [
        {
          text: 'Cancel',
        },
        {text: 'OK', onPress: () => dispatch(deletePassword(item.id))},
      ],
    );
  const copyToClipboard = sitePassword => {
    Clipboard.setString(sitePassword);
    Toast.show('Copied to clipboard');
  };
  const handelDelete = item => {
    confirmAlert(item);
  };
  const renderItem = ({item}) => {
    return (
      <ListView
        title={item.title}
        uri={item.icon}
        url={item.siteName}
        onPress={() => navigation.navigate('SiteDetailsScreen', {item})}
        copyPasswordText={() => copyToClipboard(item.sitePassword)}
        onLongPress={() => handelDelete(item)}
      />
    );
  };

  return (
    <View style={styles.statusbarColor}>
      <Pressable
        style={styles.container}
        onPress={() => setIsSearchClicked(false)}>
        <SafeAreaView style={styles.container}>
          <View style={styles.navBar}>
            <Image source={burgerMenuIcon} style={styles.burgerMenuIcon} />
            <View style={styles.header}>
              <Image source={passManagerIcon} style={styles.passManagerIcon} />
              <TouchableOpacity
                onPress={() => setIsSearchClicked(!isSearchClicked)}>
                <Image source={searchIcon} style={styles.commonIcon} />
              </TouchableOpacity>
              <Image source={dataSyncIcon} style={styles.commonIcon} />
              <Image source={profileIcon} style={styles.commonIcon} />
            </View>
          </View>
          {isSearchClicked ? (
            <SearchBar onChangeText={text => dispatch(filterList(text))} />
          ) : (
            <View style={styles.textHeaderContainer}>
              <View>
                <Text style={styles.headerText}>Sites</Text>
                <View style={styles.bottomBorder} />
              </View>
              <DropDown />
            </View>
          )}
          <View style={styles.listItemContainer}>
            <FlatList
              data={value}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <FloatingActionButton
            onPress={() => navigation.navigate('AddSite')}
          />
        </SafeAreaView>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  statusbarColor: {
    flex: 1,
    backgroundColor: '#085AAD',
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    backgroundColor: '#0E85FF',
    padding: 18,
    shadowColor: '#3C4857',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  burgerMenuIcon: {
    width: 24,
    height: 24,
  },
  passManagerIcon: {
    marginLeft: 19,
  },
  commonIcon: {
    width: 22,
    height: 22,
  },
  listItemContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  textHeaderContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    // height: 37,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomBorder: {
    borderBottomColor: '#FFA136',
    borderBottomWidth: 3.2,
    borderBottomEndRadius: 1.6,
    width: 28.8,
  },
  headerText: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 24,
    color: '#3C4857',
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
  categoryContainer: {
    flexDirection: 'row',
  },
  dropDown: {
    marginLeft: 6.8,
  },
});

export default PasswordManagerScreen;
