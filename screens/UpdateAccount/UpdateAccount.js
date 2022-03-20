import React from 'react';
import { View } from 'react-native';
import Input from '../../components/Input/Input';
import AppButton from '../../components/AppButton/APpButton';
import styles from './Styles';

function UpdateAccountScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Input placeholder='Name' stacked wrapperStyle={styles.input} />
        <Input placeholder='Phone' stacked wrapperStyle={styles.input} />
      </View>

      <AppButton title='SAVE' />
    </View>
  );
}

export default UpdateAccountScreen;
