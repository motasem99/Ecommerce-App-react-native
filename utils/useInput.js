import React, { useState } from 'react';
import { validate } from './validate';

export function useInput(initialInput, rules) {
  const [input, setInputVal] = useState({
    value: initialInput || '',
    isValid: false,
    touched: false,
  });

  const updateInput = (inputVal) => {
    setInputVal({
      value: inputVal,
      isValid: validate(inputVal, rules),
      touched: true,
    });
  };
  return [input, updateInput];
}
