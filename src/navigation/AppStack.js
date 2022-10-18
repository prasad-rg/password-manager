import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PasswordManagerScreen from '../screens/PasswordManagerScreen';
import AddSiteScreen from '../screens/AddSiteScreen';
import SiteDetailsScreen from '../screens/SiteDetailsScreen';
import EditScreen from '../screens/EditScreen';
import AuthTabNavigator from './AuthTabNavigator';
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const AppStack = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PasswordManager"
          component={PasswordManagerScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddSite"
          component={AddSiteScreen}
          options={{
            headerStyle: {backgroundColor: '#0E85FF'},
            headerTitle: '',
            headerTitleStyle: {color: '#FFFFFF'},
            headerBackVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SiteDetailsScreen"
          component={SiteDetailsScreen}
          options={{
            headerStyle: {backgroundColor: '#0E85FF'},
            headerTitle: '',
            headerTitleStyle: {color: '#FFFFFF'},
            headerBackVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditScreen"
          component={EditScreen}
          options={{
            headerStyle: {backgroundColor: '#0E85FF'},
            headerTitle: '',
            headerTitleStyle: {color: '#FFFFFF'},
            headerBackVisible: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
