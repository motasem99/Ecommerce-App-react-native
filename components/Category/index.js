import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';
import Card from '../Card';

function Category({ category }) {
  return (
    <View style={styles.container}>
      <Card>
        <Image source={{ uri: category.imageUrl }} style={styles.image} />
      </Card>
      <Text title={styles.title}>{category.title}</Text>
    </View>
  );
}

export default Category;
