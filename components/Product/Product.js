import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';
import Card from '../Card/Card';
import Price from '../Price/Price';
import PlatformTouchable from '../PlatformTouchable';
import { useNavigation } from '@react-navigation/native';

function Product({ product }) {
  const navigation = useNavigation();

  return (
    <PlatformTouchable
      style={styles.container}
      onPress={() => navigation.navigate('ProductScreen')}
    >
      <Card>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
      </Card>
      <Price price={product.price} discount={product.discount} />
      <Text title={styles.title}>{product.title}</Text>
    </PlatformTouchable>
  );
}

export default Product;
