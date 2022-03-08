import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import PlatformTouchable from '../PlatformTouchable';
import styles from './stylesAppButton';

// export class AppButton extends React.Component {
//   render() {
//     return (
//       <PlatformTouchable style={styles.wrapper}>
//         <Text style={styles.title}>Done</Text>
//       </PlatformTouchable>
//     );
//   }
// }

export default function AppButton({
  title,
  wrapperStyle,
  titleStyle,
  isLoading,
  ...rest
}) {
  return (
    <PlatformTouchable
      style={[styles.wrapper, wrapperStyle]}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color='white' />
      ) : (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
    </PlatformTouchable>
  );
}
