// src/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Book/Author..."
      value={query}
      onChange={handleInputChange}
      className="search-input"
    />
  );
};

export default SearchBar;
