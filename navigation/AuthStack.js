import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../screens/Signin/Signin';
import ConfirmationCodeScreen from '../screens/ConfirmationCode/Signin';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SigninScreen'
        component={SigninScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ConfirmationCodeScreen'
        component={ConfirmationCodeScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
