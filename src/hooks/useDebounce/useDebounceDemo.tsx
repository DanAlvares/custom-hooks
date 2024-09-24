import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

const UseDebounceDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedCount, setDebouncedCount] = useState(0);
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    setDebouncedCount((prevCount) => prevCount + 1);
  }, [debouncedValue]);

  return (
    <div>
      <h2>Debounce Demo</h2>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type something..." />
      <p>Input value: {inputValue}</p>
      <p>Debounced value: {debouncedValue}</p>
      <p>Debounced value changed: {debouncedCount} times</p>
    </div>
  );
};

export default UseDebounceDemo;
