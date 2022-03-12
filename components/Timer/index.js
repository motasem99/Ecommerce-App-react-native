import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { formateTimer } from '../../utils/helperFunctions';

export default function index({ maxSeconds, descending, deadLineFunction }) {
  const [seconds, setSeconds] = useState(descending ? maxSeconds : 0);

  const setTime = () => {
    const deadVal = descending ? 0 : maxSeconds;
    const interval = setInterval(() => {
      if (seconds === deadVal) {
        clearInterval(interval);
        deadLineFunction();
        return;
      }

      setSeconds(descending ? seconds - 1 : seconds + 1);
    }, 1000);
  };

  useEffect(() => {
    setTime();
  }, []);

  return <Text>{formateTimer(seconds)}</Text>;
}
