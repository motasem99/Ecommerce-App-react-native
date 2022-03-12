import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { formateTimer } from '../../utils/helperFunctions';

export default function index({ maxSeconds, descending, deadLineFunction }) {
  const [seconds, setSeconds] = useState(descending ? maxSeconds : 0);

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setSeconds((prevSeconds) =>
        descending ? prevSeconds - 1 : prevSeconds + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    const deadLineVal = descending ? 0 : maxSeconds;
    if (seconds === deadLineVal) {
      clearInterval(interval);
      deadLineFunction();
    }
  }, [seconds]);

  return <Text>{formateTimer(seconds)}</Text>;
}
