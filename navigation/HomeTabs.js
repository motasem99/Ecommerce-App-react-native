import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from '../components/IonIcon/IonIcon';
import { TINT_COLOR } from '../utils/Colors';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const iconName = {
          Home: 'home',
          Cart: 'shopping-cart',
          Search: 'search',
          Account: 'person',
        };

        return {
          tabBarIcon: ({ focused }) => (
            <IonIcon
              name={iconName[route.name]}
              style={{ color: focused ? TINT_COLOR : 'black', fontSize: 26 }}
            />
          ),
        };
      }}
    >
      <Tab.Screen name='Home' component={() => <Text>Home</Text>} />
      <Tab.Screen name='Cart' component={() => <Text>Cart</Text>} />
      <Tab.Screen name='Search' component={() => <Text>Search</Text>} />
      <Tab.Screen name='Account' component={() => <Text>Account</Text>} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
