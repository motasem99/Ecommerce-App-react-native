import React from 'react';
import { View, Image, Text } from 'react-native';
import Card from '../Card/Card';
import Price from '../Price/Price';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import styles from './styles';

function Order({ order }) {
  const firstCartItem = order.cartItems[0];

  return (
    <Card style={styles.container}>
      <Image
        source={{ uri: firstCartItem.product.imageUrl }}
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{firstCartItem.product.title}</Text>
        <Price price={order.cost} />
        <View style={styles.statusWrapper}>
          <Text style={styles.statusText}>{order.status}</Text>
        </View>
      </View>
    </Card>
  );
}

export default Order;
