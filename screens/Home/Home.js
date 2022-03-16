import React from 'react';
import { View, Text } from 'react-native';
import Category from '../../components/Category';
import Product from '../../components/Product';
import { dummyCategory, dummyProductWithDiscount } from '../../utils/DummyData';
import styles from './styles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Categories</Text>
      <Category category={dummyCategory} />
      <Text style={styles.headerText}>Products</Text>
      <Product product={dummyProductWithDiscount} />
    </View>
  );
}

export default HomeScreen;
