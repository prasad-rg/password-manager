import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import logo from '../../assets/images/logo.png';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Tab = createMaterialTopTabNavigator();

const AuthTabNavigator = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#20BBFF', '#0E85FF']}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headerText}>PASS {'\n'}MANAGER</Text>
        </View>
        <View style={styles.tabNavigator}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                color: '#FFFFFF',
                fontSize: 20,
                fontFamily: 'OpenSans-Bold',
              },
              tabBarStyle: {backgroundColor: 'transparent'},
              tabBarIndicatorStyle: {
                backgroundColor: '#FFA222',
                width: 81,
                height: 4,
                marginLeft: 48,
              },
            }}>
            <Tab.Screen name="SIGN IN" component={SignInScreen} />
            <Tab.Screen name="SIGN UP" component={SignUpScreen} />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 43,
  },
  linearGradient: {
    flex: 1,
  },
  logo: {
    width: 57,
    height: 67,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  headerText: {
    margin: 14,
    color: '#FBFBFB',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
  tabNavigator: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 30,
  },
});

export default AuthTabNavigator;
