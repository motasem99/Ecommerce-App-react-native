import React from 'react';
import { View, Text } from 'react-native';
import Product from '../../components/Product/Product';
import { dummyProduct1 } from '../../utils/DummyData';
import styles from './styles';

function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Products</Text>
      <Product product={dummyProduct1} />
    </View>
  );
}

export default CategoryScreen;
