import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account/Account';
import AddAddressScreen from '../screens/AddAddress/AddAddress';
import UpdateAccountScreen from '../screens/UpdateAccount/UpdateAccount';
import OrdersScreen from '../screens/Orders/Orders';

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
      <Stack.Screen name='OrdersScreen' component={OrdersScreen} />
    </Stack.Navigator>
  );
}

export default AccountStack;
