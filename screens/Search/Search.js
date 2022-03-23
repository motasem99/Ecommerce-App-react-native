import React from 'react';
import Input from '../../components/Input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const renderSearchIcon = () => {
  return <Icon name='search' style={styles.searchIcon} />;
};

function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Input
        placeholder='Type Here ...'
        bordered
        renderIconRight={renderSearchIcon}
      />
    </SafeAreaView>
  );
}

export default SearchScreen;
