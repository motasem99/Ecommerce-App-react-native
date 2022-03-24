import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Input from '../../components/Input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../components/AppButton/APpButton';
import { useInput } from '../../utils/useInput';
import axios from 'axios';

function SigninScreen({ navigation }) {
  const [input, setInputVal] = useInput('', [{ key: 'isPhone' }]);
  const [isLoading, setIsLoading] = useState(false);
  const doneHandler = () => {
    if (input.isValid) {
      setIsLoading(true);
      axios
        .post('/verify', { phone: input.value })
        .then((res) => {
          console.log(res.data);
          navigation.navigate('ConfirmationCodeScreen', {
            phone: input.value,
          });
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
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
        <AppButton
          title='DONE'
          onPress={doneHandler}
          disabled={!input.isValid}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}

export default SigninScreen;
