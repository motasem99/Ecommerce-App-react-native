import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Input from '../../components/Input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../components/AppButton/APpButton';
import { validate } from '../../utils/validate';

function SigninScreen({ navigation }) {
  const [input, setInputVal] = useState({
    value: '',
    isValid: false,
    touched: false,
  });

  const updateInput = (inputVal) => {
    setInputVal({
      value: inputVal,
      isValid: validate(inputVal, [{ key: 'isPhone' }]),
      touched: true,
    });
  };

  const doneHandler = () => {
    if (!input.isValid) {
      alert('The phone you entered is not correct!');
      return;
    }
    navigation.navigate('ConfirmationCodeScreen');
  };

  const renderPhoneIcon = () => {
    return <Icon style={styles.icon} name='call' />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter Phone Number</Text>
      </View>
      <Input
        underlined
        style={styles.input}
        renderIconLeft={renderPhoneIcon}
        placeholder='Phone'
        wrapperStyle={styles.inputWrapper}
        IconWrapperStyle={styles.iconWrapper}
        onChangeText={updateInput}
        keyboardType='numeric'
        onSubmitEditing={doneHandler}
      />
      <View style={styles.buttonWrapper}>
        <AppButton title='DONE' onPress={doneHandler} />
      </View>
    </View>
  );
}

export default SigninScreen;
