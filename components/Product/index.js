import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';
import Card from '../Card';
import Price from '../Price';

function Product({ product }) {
  return (
    <View style={styles.container}>
      <Card>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
      </Card>
      <Price price={product.price} discount={product.discount} />
      <Text title={styles.title}>{product.title}</Text>
    </View>
  );
}

export default Product;
