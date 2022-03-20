import React from 'react';
import { View, Text } from 'react-native';
import Product from '../../components/Product/Product';
import { dummyProductWithDiscount } from '../../utils/DummyData';
import styles from './styles';

function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Products</Text>
      <Product product={dummyProductWithDiscount} />
    </View>
  );
}

export default CategoryScreen;
