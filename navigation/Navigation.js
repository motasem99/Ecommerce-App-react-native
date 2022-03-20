import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';

function AppContainer({ isAuthenticated }) {
  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppContainer;
