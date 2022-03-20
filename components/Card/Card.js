import React from 'react';
import { View } from 'react-native';
import styles from './Styles';

function Card({ style, ...rest }) {
  return <View {...rest} style={[styles.container, style]} />;
}

export default Card;
