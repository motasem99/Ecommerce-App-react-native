import React from 'react';
import { View } from 'react-native';
import Order from '../../components/Order/Order';
import { dummyOrder } from '../../utils/DummyData';
import styles from './Styles';

function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Order order={dummyOrder} />
    </View>
  );
}

export default OrdersScreen;
