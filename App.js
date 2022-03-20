import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import AppButton from './components/AppButton/APpButton';
import Counter from './components/PlayAround/Counter';
import AddToCartButton from './components/AddToCartButton/AddToCartButton';
import Timer from './components/Timer/Timer';
import { Layout4 } from './components/PlayAround/FlexBox';
import { SignUpScreen } from './components/PlayAround/ResponsiveLayout';
import CameraIcon from './components/PlayAround/CameraIcon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from './components/Input/Input';
import SigninScreen from './screens/Signin/Signin';
import ConfirmationCodeScreen from './screens/ConfirmationCode/Signin';
import Category from './components/Category/Category';
import {
  dummyCategory,
  dummyProductWithDiscount,
  dummyProductWithoutDiscount,
  dummyCartItem,
} from './utils/DummyData';
import Price from './components/Price/Price';
import Product from './components/Product/Product';
import HomeScreen from './screens/Home/Home';
import CategoryScreen from './screens/Category/Home';
import ProductScreen from './screens/Product/Product';
import CartItem from './components/CartItem/CartItem';
import CartScreen from './screens/Cart/Cart';
import Checkout from './screens/Checkout/Checkout';
import SearchScreen from './screens/Search/Search';
import AccountScreen from './screens/Account/Account';
import UpdateAccountScreen from './screens/UpdateAccount/UpdateAccount';

export default function App() {
  return (
    <View style={styles.container}>
      <UpdateAccountScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
