import React from 'react';
import { View, Image, Text, Platform } from 'react-native';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
import Price from '../../components/Price/Price';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { dummyProductWithDiscount } from '../../utils/DummyData';
import IonIcon from '../../components/IonIcon/IonIcon';
import styles from './Styles';

const getProduct = (productId) => {
  return dummyProductWithDiscount;
};

function ProductScreen({ productId }) {
  const product = getProduct(productId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.iconTitleWrapper}>
        <IonIcon name='arrow-back' style={styles.backIcon} />
        <View style={styles.titleWrapper}>
          <Text style={styles.productTitle}>{product.title}</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Price price={product.price} discount={product.discount} />
        <Text style={styles.descriptionText}>Description</Text>
        <Text>{product.description}</Text>
        <View style={styles.buttonWrapper}>
          <AddToCartButton />
        </View>
      </View>
    </View>
  );
}

export default ProductScreen;
