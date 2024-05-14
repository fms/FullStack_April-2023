import React, { useState } from 'react';
import style from './searchBar.module.scss';
type Props = {
    onInputChange:(value: string) => void;
}

function SearchBar({onInputChange}: Props) {
    const [inputValue , setInputValue] = useState('');

    function inputHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;
        setInputValue(newValue);
        onInputChange(newValue);
    }
  return (
    <>
    <input type="text" className = {style.input} placeholder='What are you looking for?' value={inputValue} onChange={inputHandleChange} />
    </>
  )
}

export default SearchBar