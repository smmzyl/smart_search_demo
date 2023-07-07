/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css';
import { getGoogleFiles } from './utils/api'
import LOGO from './assets/logo.png'

const inutChangeProps = {
  style: {
    borderBottom: 'none',
    borderRadius: '10px 10px 0px 0px'
  }
}

const Suggestions = ({ suggestions, selectedSuggestionIndex, onSuggestionClick }) => (
  <ul className="suggestions-dropdown">
    {suggestions.map((suggestion, index) => (
      <li
        key={suggestion.text}
        className={index === selectedSuggestionIndex ? 'selected' : ''}
        onClick={() => onSuggestionClick(suggestion.text)}
      >
        {suggestion.text}
      </li>
    ))}
  </ul>
);

const ClearButton = ({ onClick }) => (
  <button className="clear-button" onClick={onClick}>
    x
  </button>
);

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(getGoogleFiles);
        setSuggestions(response.data.resources);
      } catch (error) {
        setSuggestions([])
        console.log('Error fetching suggestions:', error);
      }
    };

    fetchSuggestions();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 0) {
      setSelectedSuggestionIndex(-1);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (selectedSuggestionIndex > 0) {
        setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
      }
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (selectedSuggestionIndex < suggestions.length - 1) {
        setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
      }
    }
    if (event.key === 'Enter') {
      if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < filteredSuggestions.length) {
        setInputValue(filteredSuggestions[selectedSuggestionIndex].text);
      }
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowDropdown(false);
  };

  const handleClearButtonClick = () => {
    setInputValue('');
    setShowDropdown(false);
  };

  const filteredSuggestions = suggestions?.filter((suggestion) =>
    suggestion.text.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  return (
    <div className="search-bar">
      <img className='logo' src={LOGO} />
      <input
        {...(showDropdown && filteredSuggestions.length > 0 && inutChangeProps)}
        className="search-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />

      {inputValue && <ClearButton onClick={handleClearButtonClick} />}
      {showDropdown && filteredSuggestions.length > 0 && (
        <Suggestions
          suggestions={filteredSuggestions}
          selectedSuggestionIndex={selectedSuggestionIndex}
          onSuggestionClick={handleSuggestionClick}
        />
      )}
    </div>
  );
};

export default SearchBar;