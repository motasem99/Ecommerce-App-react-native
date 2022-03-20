import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from 'react-native';
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
  dummyOrder,
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
import AddAddressScreen from './screens/AddAddress/AddAddress';
import Order from './components/Order/Order';
import OrdersScreen from './screens/Orders/Orders';
import IonIcon from './components/IonIcon/IonIcon';

const users = [
  { name: 'mohammed', phone: '21354655' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
  { name: 'mutasem', phone: '6666222225' },
];

export default function App() {
  return (
    <ScrollView>
      {users.map((user) => {
        const { name, phone } = user;
        return (
          <View style={styles.userContainer}>
            <View style={styles.wrapper}>
              <IonIcon style={styles.icon} name='person' />
              <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.wrapper}>
              <IonIcon style={styles.icon} name='call' />
              <Text style={styles.text}>{phone}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
