import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import burgerMenuIcon from '../../assets/images/burger_menu.png';
import passManagerIcon from '../../assets/images/PASS_MANAGER.png';
import searchIcon from '../../assets/images/search.png';
import dataSyncIcon from '../../assets/images/sync_icn.png';
import profileIcon from '../../assets/images/profile.png';
import ListView from '../components/ListView';
import FloatingActionButton from '../components/FloatingActionButton';
import {data} from '../../data/data';

const PasswordManagerScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <ListView
      title={item.title}
      uri={item.icon}
      url={item.siteName}
      onPress={() => navigation.navigate('SiteDetailsScreen')}
      copyPasswordText={() => alert(item.id)}
    />
  );

  return (
    <View style={styles.statusbarColor}>
      <SafeAreaView style={styles.container}>
        <View style={styles.navBar}>
          <Image source={burgerMenuIcon} style={styles.burgerMenuIcon} />
          <View style={styles.header}>
            <Image source={passManagerIcon} style={styles.passManagerIcon} />
            <Image source={searchIcon} style={styles.commonIcon} />
            <Image source={dataSyncIcon} style={styles.commonIcon} />
            <Image source={profileIcon} style={styles.commonIcon} />
          </View>
        </View>
        <View style={styles.listItemContainer}>
          <View style={styles.textHeaderContainer}>
            <View>
              <Text style={styles.headerText}>Sites</Text>
              <View style={styles.bottomBorder} />
            </View>
            <Text style={styles.category}>Social Media</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <FloatingActionButton onPress={() => navigation.navigate('AddSite')} />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbarColor: {
    flex: 1,
    backgroundColor: '#085AAD',
  },
  navBar: {
    flexDirection: 'row',
    width: 400,
    height: 56,
    backgroundColor: '#0E85FF',
    padding: 18,
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
    height: 37,
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
    // marginVertical: 4,
  },
  badge: {
    backgroundColor: '#0E85FF',
    borderRadius: 20,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default PasswordManagerScreen;
