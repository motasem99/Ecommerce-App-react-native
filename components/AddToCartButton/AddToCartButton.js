import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AppButton from '../AppButton/APpButton';
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
        wrapperStyle={styles.wrapper}
      />
    );
  };

  const renderIncreaseDecreaseButton = () => {
    return (
      <View style={[styles.increaseDecreaseContainer, styles.wrapper]}>
        <Text style={styles.plusMinus} onPress={decrementQuantity}>
          -
        </Text>
        <Text>{quantity}</Text>
        <Text style={styles.plusMinus} onPress={incrementQuantity}>
          +
        </Text>
      </View>
    );
  };

  return quantity === 0
    ? renderInitialButton()
    : renderIncreaseDecreaseButton();
}
