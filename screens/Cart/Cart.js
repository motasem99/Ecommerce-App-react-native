import React from 'react';
import { View, Text } from 'react-native';
import AppButton from '../../components/AppButton/APpButton';
import CartItem from '../../components/CartItem/CartItem';
import { dummyCartItem } from '../../utils/DummyData';
import styles from './Styles';

function CartScreen() {
  return (
    <View style={styles.container}>
      <CartItem cartItem={dummyCartItem} />
      <View style={styles.wrapperWrapper}>
        <View style={styles.wrapper}>
          <Text style={styles.totalText}>Total = 3654 $</Text>
          <AppButton title='CHECKOUT' titleStyle={styles.checkoutText} />
        </View>
      </View>
    </View>
  );
}

export default CartScreen;
