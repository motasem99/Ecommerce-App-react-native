import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import PlatformTouchable from '../PlatformTouchable';
import styles from './stylesAppButton';

export default function AppButton({
  title,
  wrapperStyle,
  titleStyle,
  isLoading,
  disabled,
  ...rest
}) {
  return (
    <PlatformTouchable
      {...rest}
      disabled={disabled || isLoading}
      style={[styles.wrapper, wrapperStyle, disabled ? styles.disabled : null]}
    >
      {isLoading ? (
        <ActivityIndicator color='white' />
      ) : (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
    </PlatformTouchable>
  );
}
