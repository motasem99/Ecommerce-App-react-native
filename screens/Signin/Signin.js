import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Input from '../../components/Input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../components/AppButton/APpButton';
import { useInput } from '../../utils/useInput';

function SigninScreen({ navigation }) {
  const [input, setInputVal] = useInput('', [{ key: 'isPhone' }]);

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
        onChangeText={setInputVal}
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
