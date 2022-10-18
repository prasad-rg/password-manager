import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PasswordManagerScreen from '../screens/PasswordManagerScreen';
import AddSiteScreen from '../screens/AddSiteScreen';
import {Text} from 'react-native';
import Icon from '../../assets/images/add_btn.png';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
