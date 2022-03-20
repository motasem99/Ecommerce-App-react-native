import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Platform } from 'react-native';

function IonIcon({ name, ...rest }) {
  return (
    <Icon
      {...rest}
      name={Platform.select({ android: '', ios: 'ios-' }) + name}
    />
  );
}

export default IonIcon;
