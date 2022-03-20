import React from 'react';
import { FlatList } from 'react-native';
import Product from '../Product/Product';

const renderProduct = ({ item }) => {
  return <Product product={item} />;
};

function ProductsList(props) {
  return <FlatList {...props} renderItem={renderProduct} numColumns={2} />;
}

export default ProductsList;
