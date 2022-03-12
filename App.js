import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { PlatformTouchable } from './components/PlatformTouchable';
import AppButton from './components/AppButton/index';
import Counter from './components/PlayAround/Counter';
import AddToCartButton from './components/AddToCartButton';
import Timer from './components/Timer';
import { Layout4 } from './components/PlayAround/FlexBox';
import { SignUpScreen } from './components/PlayAround/ResponsiveLayout';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default function App() {
  useEffect(() => {
    const TestingDeviceWidth = 414;
    const rem = Dimensions.get('window').width / TestingDeviceWidth;

    EStyleSheet.build({
      $rem: rem,
    });
  }, []);

  return <SignUpScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
