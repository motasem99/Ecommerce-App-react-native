import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';
import {
  dummyCategories,
  dummyProductWithDiscount,
} from '../../utils/DummyData';
import styles from './styles';

const renderCategory = ({ item }) => {
  return <Category category={item} />;
};

const renderCategoriesList = (categories) => {
  return (
    <FlatList data={categories} renderItem={renderCategory} horizontal={true} />
  );
};

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Categories</Text>
      {renderCategoriesList(dummyCategories)}
      <Text style={styles.headerText}>Products</Text>
      <Product product={dummyProductWithDiscount} />
    </View>
  );
}

export default HomeScreen;
