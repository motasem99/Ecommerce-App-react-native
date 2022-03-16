import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';

function Category({ category }) {
  return (
    <View>
      <Image source={{ uri: category.imageUrl }} style={styles.image} />
      <Text title={styles.title}>{category.title}</Text>
    </View>
  );
}

export default Category;
