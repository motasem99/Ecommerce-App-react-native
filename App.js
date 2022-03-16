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

export default function App() {
  return <ConfirmationCodeScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 20,
//   },
// });
