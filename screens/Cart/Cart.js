import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AppButton from '../../components/AppButton/APpButton';
import CartItem from '../../components/CartItem/CartItem';
import { dummyCartItems } from '../../utils/DummyData';
import styles from './Styles';

const renderCartItem = ({ item }) => {
  return <CartItem cartItem={item} />;
};

const renderCartItems = (cartItems) => {
  return <FlatList data={cartItems} renderItem={renderCartItem} />;
};

function CartScreen() {
  return (
    <View style={styles.container}>
      {renderCartItems(dummyCartItems)}
      <View style={styles.wrapper}>
        <Text style={styles.totalText}>Total = 3654 $</Text>
        <AppButton title='CHECKOUT' titleStyle={styles.checkoutText} />
      </View>
    </View>
  );
}

export default CartScreen;
