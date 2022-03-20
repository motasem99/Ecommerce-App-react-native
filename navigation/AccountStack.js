import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account/Account';
import AddAddressScreen from '../screens/AddAddress/AddAddress';
import UpdateAccountScreen from '../screens/UpdateAccount/UpdateAccount';

const Stack = createNativeStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='AddAddressScreen' component={AddAddressScreen} />
      <Stack.Screen
        name='UpdateAccountScreen'
        component={UpdateAccountScreen}
      />
    </Stack.Navigator>
  );
}

export default AccountStack;
