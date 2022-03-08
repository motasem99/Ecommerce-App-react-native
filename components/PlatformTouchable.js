import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

// export class PlatformTouchable extends React.Component {
//   render() {
//     // const Touchable =
//     //   Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

//     const Touchable = Platform.select({
//       android: TouchableNativeFeedback,
//       ios: TouchableOpacity,
//     });

//     return <Touchable {...this.props} />;
//   }
// }

export default function PlatformTouchable(props) {
  const Touchable = Platform.select({
    ios: TouchableNativeFeedback,
    android: TouchableOpacity,
  });

  return <Touchable {...props} />;
}
