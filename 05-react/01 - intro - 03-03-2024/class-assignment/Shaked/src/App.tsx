import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };

  return (
    <div>
      <h1>Hey there !</h1>
      <input
        type='text'
        placeholder='My Name'
        value={name}
        onChange={handleNameChange}
      />
      <p>{name} {lastname}</p>
      <input
        type='text'
        placeholder='My LastName'
        value={lastname}
        onChange={handleLastnameChange}
      />
    </div>
  );
};

export default App;
