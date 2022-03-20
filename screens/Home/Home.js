import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import Category from '../../components/Category/Category';
import { dummyCategories, dummyProducts } from '../../utils/DummyData';
import ProductsList from '../../components/ProductsList/ProductsList';
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
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Categories</Text>
      {renderCategoriesList(dummyCategories)}
      <Text style={styles.headerText}>Products</Text>
      <ProductsList data={dummyProducts} />
    </ScrollView>
  );
}

export default HomeScreen;
