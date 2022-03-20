import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from '../components/IonIcon/IonIcon';
import { TINT_COLOR } from '../utils/Colors';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import SearchStack from './SearcjStack';
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
      <Tab.Screen name='HomeStack' component={HomeStack} />
      <Tab.Screen name='CartStack' component={CartStack} />
      <Tab.Screen name='SearchStack' component={SearchStack} />
      <Tab.Screen name='AccountStack' component={AccountStack} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
