import React from 'react';
import useLocalStorage from './useLocalStorage';

const LocalStorageDemo: React.FC = () => {
  const [name, setName] = useLocalStorage<string>('name', '');
  const [age, setAge] = useLocalStorage<number>('age', 0);

  return (
    <div>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input id="age" type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
      </div>
      <p>Stored Name: {name}</p>
      <p>Stored Age: {age}</p>
    </div>
  );
};

export default LocalStorageDemo;
