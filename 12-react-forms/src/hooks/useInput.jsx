import { useState } from 'react';

export function useInput(deafultValue, validationFn) {
  const [userInput, setUserInput] = useState(deafultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(userInput);

  function handleUserInput(e) {
    setUserInput(e.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: userInput,
    handleInputBlur,
    handleUserInput,
    hasError: didEdit && !valueIsValid,
  };
}
