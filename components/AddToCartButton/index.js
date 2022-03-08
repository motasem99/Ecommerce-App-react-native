import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AppButton from '../AppButton';
import styles from './Styles';

export default function AddToCartButton() {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  const renderInitialButton = () => {
    return (
      <AppButton
        onPress={incrementQuantity}
        title='ADD TO CART'
        wrapperStyle={styles.plusMinus}
      />
    );
  };

  const renderIncreaseDecreaseButton = () => {
    return (
      <View style={[styles.increaseDecreaseContainer, styles.plusMinus]}>
        <Text onPress={decrementQuantity}>-</Text>
        <Text>{quantity}</Text>
        <Text onPress={incrementQuantity}>+</Text>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      {quantity === 0 ? renderInitialButton() : renderIncreaseDecreaseButton()}
    </View>
  );
}
