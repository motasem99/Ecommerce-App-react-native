import { Dimensions } from 'react-native';

const TestingDeviceWidth = 414;

export const rem = Dimensions.get('window').width / TestingDeviceWidth;

export const CURRENCY = '$';
export const TOKEN_KEY = 'RNCCourseProject.Keys.TOKEN';
export const USER_KEY = 'RNCCourseProject.Keys.USER';
