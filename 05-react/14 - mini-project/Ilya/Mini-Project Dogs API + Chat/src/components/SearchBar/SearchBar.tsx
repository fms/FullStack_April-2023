import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSearch} className="searchBar">
      <input
        type="text"
        placeholder="Search breeds..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="searchButton">Search</button>
    </form>
  );
};

export default SearchBar;

