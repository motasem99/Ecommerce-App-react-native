import React from 'react';
import { View, Image, Text } from 'react-native';
import PlatformTouchable from '../PlatformTouchable';
import Card from '../Card/Card';
import Price from '../Price/Price';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function CartItem({ cartItem }) {
  const navigation = useNavigation();

  return (
    <Card style={styles.outerContainer}>
      <PlatformTouchable
        style={styles.container}
        onPress={() => navigation.navigate('ProductScreen')}
      >
        <Image
          source={{ uri: cartItem.product.imageUrl }}
          style={styles.image}
        />
        <View style={styles.wrapper}>
          <Text style={styles.title}>{cartItem.product.title}</Text>
          <Price
            price={cartItem.product.price}
            discount={cartItem.product.discount}
          />
          <AddToCartButton />
        </View>
      </PlatformTouchable>
    </Card>
  );
}

export default CartItem;
