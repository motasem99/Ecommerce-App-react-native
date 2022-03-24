import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlatformTouchable from '../../components/PlatformTouchable';
import IonIcon from '../../components/IonIcon/IonIcon';
import styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import authStore from '../../TryFlux/AuthStore';

const renderInfoSection = (user) => {
  return (
    <View style={styles.infoSection}>
      <IonIcon name='person' style={styles.personIcon} />
      <View style={styles.verticalLine} />
      <View>
        <Text style={styles.infoText}>{user.name || 'HIT to enter name'}</Text>
        <Text style={styles.infoText}>{user.phone}</Text>
      </View>
    </View>
  );
};

const renderButton = (iconName, title, onPress) => {
  return (
    <PlatformTouchable style={styles.button} onPress={onPress}>
      <View style={styles.iconTitleWrapper}>
        <IonIcon name={iconName} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.horizontalLine} />
    </PlatformTouchable>
  );
};

const renderButtonSection = (navigation) => {
  return (
    <View>
      {renderButton('person', 'Profile', () => {
        navigation.navigate('UpdateAccountScreen');
      })}
      {renderButton('place', 'Shipping Address', () => {
        navigation.navigate('AddAddressScreen');
      })}
      {renderButton('shop', 'Previous Orders', () => {
        navigation.navigate('OrdersScreen');
      })}
      {renderButton('logout', 'Log Out', () => {})}
    </View>
  );
};

function AccountScreen({ navigation }) {
  const [user, setUser] = useState(authStore.user);

  const handleUserUpdate = () => {
    setUser(authStore.user);
  };

  useEffect(() => {
    authStore.on('change', handleUserUpdate);
  }, []);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.container}>
        {renderInfoSection(user)}
        {renderButtonSection(navigation)}
      </View>
    </SafeAreaView>
  );
}

export default AccountScreen;
