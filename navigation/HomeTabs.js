import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from '../components/IonIcon/IonIcon';
import { TINT_COLOR } from '../utils/Colors';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const iconName = {
          HomeStack: 'home',
          CartStack: 'shopping-cart',
          SearchStack: 'search',
          AccountStack: 'person',
        };

        const label = {
          HomeStack: 'Shop',
          CartStack: 'Cart',
          SearchStack: 'Search',
          AccountStack: 'Account',
        };

        return {
          tabBarIcon: ({ focused }) => (
            <IonIcon
              name={iconName[route.name]}
              style={{ color: focused ? TINT_COLOR : 'black', fontSize: 26 }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? TINT_COLOR : 'black', fontSize: 15 }}
            >
              {label[route.name]}
            </Text>
          ),
        };
      }}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name='HomeStack'
        component={HomeStack}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name='CartStack'
        component={CartStack}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name='SearchStack'
        component={SearchStack}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name='AccountStack'
        component={AccountStack}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
