import React from 'react';
import { View, Text } from 'react-native';
import { getActualPrice } from '../../utils/helperFunctions';
import styles from './Styles';
import { CURRENCY } from '../../utils/constants';

function Price({ price, discount }) {
  // discount => 0.2 => 20%

  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        {' '}
        {CURRENCY} {getActualPrice(price, discount)}
      </Text>
      {discount && (
        <Text style={styles.oldPrice}>
          {CURRENCY}
          {price}
        </Text>
      )}
    </View>
  );
}

export default Price;
