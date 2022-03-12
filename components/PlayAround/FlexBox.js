import React from 'react';
import { View } from 'react-native';

function FlexBox() {
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }}>
      <View style={{ backgroundColor: 'red', flex: 2 }} />
      <View style={{ backgroundColor: 'blue', flex: 1 }} />
      <View style={{ backgroundColor: 'green', flex: 1 }} />
    </View>
  );
}

export default FlexBox;
