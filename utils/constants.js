import { Dimensions } from 'react-native';

const TestingDeviceWidth = 414;

export const rem = Dimensions.get('window').width / TestingDeviceWidth;

export const CURRENCY = '$';
