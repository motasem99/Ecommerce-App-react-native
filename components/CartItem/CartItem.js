import React from 'react';
import { View, Image, Text } from 'react-native';
import Card from '../Card/Card';
import Price from '../Price/Price';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import styles from './styles';

function CartItem({ cartItem }) {
  return (
    <Card style={styles.container}>
      <Image source={{ uri: cartItem.product.imageUrl }} style={styles.image} />
      <View style={styles.wrapper}>
        <Text>{cartItem.product.title}</Text>
        <Price
          price={cartItem.product.price}
          discount={cartItem.product.discount}
        />
        <AddToCartButton />
      </View>
    </Card>
  );
}

export default CartItem;
