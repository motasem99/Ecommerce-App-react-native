import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Input from '../../components/Input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../components/AppButton/APpButton';
import { useInput } from '../../utils/useInput';

function ConfirmationCodeScreen() {
  const [input, setInputVal] = useInput('', [{ key: 'isConfirmationCode' }]);

  const doneHandler = () => {
    if (!input.isValid) {
      alert('The Confirmation code is not valid!');
    }
  };

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
        onChangeText={setInputVal}
        onSubmitEditing={doneHandler}
        keyboardType='numeric'
      />
      <View style={styles.buttonWrapper}>
        <AppButton title='DONE' onPress={doneHandler} />
      </View>
    </View>
  );
}

export default ConfirmationCodeScreen;
