import React from 'react';
import { View, Text } from 'react-native';
import Product from '../../components/Product/Product';
import { dummyProduct1 } from '../../utils/DummyData';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

function CategoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Products</Text>
      <Product product={dummyProduct1} />
    </SafeAreaView>
  );
}

export default CategoryScreen;
