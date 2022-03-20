import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/Cart/Cart';
import ProductScreen from '../screens/Product/Product';

const Stack = createNativeStackNavigator();

function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='CartScreen'
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='ProductScreen' component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default CartStack;
