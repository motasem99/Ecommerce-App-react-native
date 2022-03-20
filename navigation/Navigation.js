import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const AuthStack = () => {
  return <Text>Auth Stack</Text>;
};

const HomeTabs = () => {
  return <Text>Home Tabs</Text>;
};

function AppContainer({ isAuthenticated }) {
  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppContainer;
