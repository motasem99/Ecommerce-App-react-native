import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../components/AppButton';

function ConfirmationCodeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter Confirmation Code</Text>
      </View>
      <Input
        bordered
        style={styles.input}
        placeholder='__ __ __ __'
        placeHolderPosition='center'
        wrapperStyle={styles.inputWrapper}
        IconWrapperStyle={styles.iconWrapper}
      />
      <View style={styles.buttonWrapper}>
        <AppButton title='DONE' />
      </View>
    </View>
  );
}

export default ConfirmationCodeScreen;
