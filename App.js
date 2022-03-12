import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { PlatformTouchable } from './components/PlatformTouchable';
import AppButton from './components/AppButton/index';
import Counter from './components/PlayAround/Counter';
import AddToCartButton from './components/AddToCartButton';
import Timer from './components/Timer';
import { Layout4 } from './components/PlayAround/FlexBox';

export default function App() {
  return <Layout4 color='red' />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
