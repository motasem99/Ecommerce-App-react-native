import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/Search/Search';
import ProductScreen from '../screens/Product/Product';

const Stack = createNativeStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='ProductScreen' component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default SearchStack;
