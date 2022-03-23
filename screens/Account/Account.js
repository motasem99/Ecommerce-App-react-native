import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlatformTouchable from '../../components/PlatformTouchable';
import IonIcon from '../../components/IonIcon/IonIcon';
import styles from './Styles';

const renderInfoSection = () => {
  return (
    <View style={styles.infoSection}>
      <IonIcon name='person' style={styles.personIcon} />
      <View style={styles.verticalLine} />
      <View>
        <Text style={styles.infoText}>Mutasem Kwaik</Text>
        <Text style={styles.infoText}>5204565146846</Text>
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
  return (
    <View style={styles.container}>
      {renderInfoSection()}
      {renderButtonSection(navigation)}
    </View>
  );
}

export default AccountScreen;
