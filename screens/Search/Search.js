import React from 'react';
import { View } from 'react-native';
import Input from '../../components/Input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const renderSearchIcon = () => {
  return <Icon name='search' style={styles.searchIcon} />;
};

function SearchScreen() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.container}>
        <Input
          placeholder='Type Here ...'
          bordered
          renderIconRight={renderSearchIcon}
        />
      </View>
    </SafeAreaView>
  );
}

export default SearchScreen;
