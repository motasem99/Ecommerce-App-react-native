import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

const renderButton = (iconName, title) => {
  return (
    <View style={styles.button}>
      <View style={styles.iconTitleWrapper}>
        <IonIcon name={iconName} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.horizontalLine} />
    </View>
  );
};

const renderButtonSection = () => {
  return (
    <View>
      {renderButton('person', 'Profile')}
      {renderButton('place', 'Shipping Address')}
      {renderButton('shop', 'Previous Orders')}
      {renderButton('logout', 'Log Out')}
    </View>
  );
};

function AccountScreen() {
  return (
    <View style={styles.container}>
      {renderInfoSection()}
      {renderButtonSection()}
    </View>
  );
}

export default AccountScreen;
