import { useState } from 'react';

const useCustomCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const setValue = (value) => {
    setCount(value);
  };

  return { count, increment, decrement, reset, setValue };
};

export default useCustomCounter;
