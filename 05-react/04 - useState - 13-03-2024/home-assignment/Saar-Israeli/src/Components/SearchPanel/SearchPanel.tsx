import React, { useState, useEffect } from "react";
import "./SearchPanel.scss";

interface SearchPanelProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm, setSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-panel">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchPanel;