import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Input from '../../components/Input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../components/AppButton/APpButton';

function SigninScreen({ navigation }) {
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
      />
      <View style={styles.buttonWrapper}>
        <AppButton
          title='DONE'
          onPress={() => {
            navigation.navigate('ConfirmationCodeScreen');
          }}
        />
      </View>
    </View>
  );
}

export default SigninScreen;
