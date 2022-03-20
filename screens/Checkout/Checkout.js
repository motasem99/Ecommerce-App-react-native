import React from 'react';
import { View, Text } from 'react-native';
import AppButton from '../../components/AppButton/APpButton';
import { CURRENCY } from '../../utils/constants';
import styles from './Styles';

const renderAddressSection = () => {
  return (
    <View style={styles.addressSection}>
      <Text style={styles.shipToText}>SHIP TO</Text>
      <Text>{`some where,
      bla bla bla`}</Text>
      <View style={styles.updateWrapper}>
        <Text style={styles.updateText}>UPDATE</Text>
      </View>
    </View>
  );
};

const renderOrderCostRow = (key, value) => {
  return (
    <View style={styles.orderCostRow}>
      <Text style={styles.orderCostKey}>{key}</Text>
      <Text style={styles.orderCostValue}>{value}</Text>
    </View>
  );
};

const renderCostOrderSection = () => {
  return (
    <View style={styles.orderCostSection}>
      {renderOrderCostRow('Subtotal', CURRENCY + '160')}
      {renderOrderCostRow('Shipping', 'free')}
      <View style={styles.horizontalRow} />
      {renderOrderCostRow('Total', CURRENCY + '160')}
    </View>
  );
};

const renderButton = () => {
  return <AppButton title='BUY' />;
};

function Checkout() {
  return (
    <View style={styles.container}>
      {renderAddressSection()}
      {renderCostOrderSection()}
      {renderButton()}
    </View>
  );
}

export default Checkout;
