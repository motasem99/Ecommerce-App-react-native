import React from 'react';
import { View, FlatList } from 'react-native';
import Order from '../../components/Order/Order';
import { dummyOrders } from '../../utils/DummyData';
import styles from './Styles';

const renderOrder = ({ item }) => {
  return <Order order={item} />;
};

const renderOrders = (orders) => {
  return <FlatList data={orders} renderItem={renderOrder} />;
};

function OrdersScreen() {
  return <View style={styles.container}>{renderOrders(dummyOrders)}</View>;
}

export default OrdersScreen;
