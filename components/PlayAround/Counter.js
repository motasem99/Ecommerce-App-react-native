import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Button title='Increment' onPress={incrementHandler} />
      <Text>{counter}</Text>
      <Button title='Decrement' onPress={decrementHandler} />
    </View>
  );
}
