import React from 'react';
import { View, Image, Text } from 'react-native';
import PlatformTouchable from '../PlatformTouchable';
import styles from './Styles';
import Card from '../Card/Card';
import { useNavigation } from '@react-navigation/native';

function Category({ category }) {
  const navigation = useNavigation();
  return (
    <PlatformTouchable
      style={styles.container}
      onPress={() => navigation.navigate('CategoryScreen')}
    >
      <Card>
        <Image source={{ uri: category.imageUrl }} style={styles.image} />
      </Card>
      <Text title={styles.title}>{category.title}</Text>
    </PlatformTouchable>
  );
}

export default Category;
