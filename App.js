import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { PlatformTouchable } from './components/PlatformTouchable';
import AppButton from './components/AppButton/index';
import Counter from './components/PlayAround/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
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
