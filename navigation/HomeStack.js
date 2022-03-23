import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home';
import ProductScreen from '../screens/Product/Product';
import CategoryScreen from '../screens/Category/Category';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='ProductScreen' component={ProductScreen} />
      <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
