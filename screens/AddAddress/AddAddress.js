import React from 'react';
import { View } from 'react-native';
import Input from '../../components/Input/Input';
import AppButton from '../../components/AppButton/APpButton';
import styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';

function AddAddressScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Input placeholder='Name' stacked wrapperStyle={styles.input} />
        <Input placeholder='Phone' stacked wrapperStyle={styles.input} />
        <Input placeholder='City' stacked wrapperStyle={styles.input} />
        <Input placeholder='Area' stacked wrapperStyle={styles.input} />
        <Input placeholder='Street' stacked wrapperStyle={styles.input} />
        <Input placeholder='Building' stacked wrapperStyle={styles.input} />
      </View>

      <AppButton title='ADD' />
    </SafeAreaView>
  );
}

export default AddAddressScreen;
