import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ilya from "./SettingsPage.module.scss";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    if (!name && !lastName) {
      navigate('/');
    } else {
      setShowConfirmation(true);
    }
  };

  const handleConfirmation = (choice: boolean) => {
    setShowConfirmation(false);
    if (choice) {
      navigate('/');
    }
  };

  return (
    <div className={Ilya.SettingsPage}>
      <button onClick={() => navigate(-1)}>Go back to Home</button>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button className={Ilya.button} type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {showConfirmation && (
        <div>
          <p>Leaving will discard changes.</p>
          <button onClick={() => handleConfirmation(true)}>
            I understand - continue
          </button>
          <button onClick={() => handleConfirmation(false)}>No, go back</button>
        </div>
      )}
    </div>
  );
};


export default SettingsPage;