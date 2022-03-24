import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Input from '../../components/Input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../components/AppButton/APpButton';
import { useInput } from '../../utils/useInput';
import axios from 'axios';
import { TOKEN_KEY } from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ConfirmationCodeScreen({ route }) {
  const [isLoading, setIsLoading] = useState(false);
  const { phone } = route.params;

  const [input, setInputVal] = useInput('', [{ key: 'isConfirmationCode' }]);

  const doneHandler = () => {
    if (input.isValid) {
      setIsLoading(true);
      axios
        .post('/verify/validate', {
          phone,
          code: input.value,
        })
        .then((res) => {
          const { token } = res.data;
          axios.defaults.headers.Authorization = 'Bearer ' + token;
          AsyncStorage.setItem(TOKEN_KEY, token);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
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

export default ConfirmationCodeScreen;
