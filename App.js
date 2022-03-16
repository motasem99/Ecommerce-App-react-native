import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
// import { PlatformTouchable } from './components/PlatformTouchable';
import AppButton from './components/AppButton/index';
import Counter from './components/PlayAround/Counter';
import AddToCartButton from './components/AddToCartButton';
import Timer from './components/Timer';
import { Layout4 } from './components/PlayAround/FlexBox';
import { SignUpScreen } from './components/PlayAround/ResponsiveLayout';
import CameraIcon from './components/PlayAround/CameraIcon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from './components/Input';
import SigninScreen from './screens/Signin/Signin';
import ConfirmationCodeScreen from './screens/ConfirmationCode/Signin';
import Category from './components/Category';
import {
  dummyCategory,
  dummyProductWithDiscount,
  dummyProductWithoutDiscount,
} from './utils/DummyData';
import Price from './components/Price';
import Product from './components/Product';

export default function App() {
  return (
    <View style={styles.container}>
      <Product product={dummyProductWithoutDiscount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
