import React, { useState } from 'react';

const NameInput = ({ onNameSubmit }:{onNameSubmit: (name:string) => void}) => {
    const [name, setName] = useState('');

    const handleSubmit:React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (name.trim() !== '') {
            onNameSubmit(name);
        }
    };

    return (
        <div id="name-input-container">
            <input
                id="name-input"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button id="name-submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default NameInput;
