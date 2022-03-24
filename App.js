import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  TouchableOpacity,
  ActivityIndicator,
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
import ConfirmationCodeScreen from './screens/ConfirmationCode/ConfirmationCode';
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
import CategoryScreen from './screens/Category/Category';
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
import { NavigationContainer } from '@react-navigation/native';
import AppContainer from './navigation/Navigation';
import { validate } from './utils/validate';

export default function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getReposHandler = () => {
    setLoading(true);
    fetch(`https://api.github.com/users/motasem99/repos`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('error');
      })
      .then((jsonRes) => {
        console.log('Json Response');
        setRepos(jsonRes);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Button title='GET Repos' onPress={getReposHandler} />
      {loading && <ActivityIndicator size='large' color='#0000ff' />}
      <View>
        {repos.map((repo) => {
          return <Text>{repo.name}</Text>;
        })}
      </View>
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
