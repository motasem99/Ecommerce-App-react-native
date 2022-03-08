import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { PlatformTouchable } from './components/PlatformTouchable';
import AppButton from './components/AppButton/index';
import Counter from './components/PlayAround/Counter';
import AddToCartButton from './components/AddToCartButton';

export default function App() {
  return (
    <View style={styles.container}>
      <AddToCartButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
