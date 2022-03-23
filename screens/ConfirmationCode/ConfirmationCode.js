import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Input from '../../components/Input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../components/AppButton/APpButton';
import { validate } from '../../utils/validate';
function ConfirmationCodeScreen() {
  const [input, setInputVal] = useState({
    value: '',
    isValid: false,
    touched: false,
  });

  const updateInput = (inputVal) => {
    setInputVal({
      value: inputVal,
      isValid: validate(inputVal, [{ key: 'isConfirmationCode' }]),
      touched: true,
    });
  };

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
        onChangeText={updateInput}
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
