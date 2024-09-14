import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import './SearchBar.css'; // Add CSS file for styling

// Fetch data from a JSON file or URL
const fetchCountries = async () => {
  const response = await fetch('/countries.json');
  const data = await response.json();
  return data;
};

// Display the matching result (country or capital)
const renderSuggestion = (suggestion, { query }) => {
  const inputValue = query.trim().toLowerCase();
  const countryMatch = suggestion.country.toLowerCase().includes(inputValue);
  const capitalMatch = suggestion.capital.toLowerCase().includes(inputValue);

  return (
    <div className="suggestion-item">
      {countryMatch ? suggestion.country : capitalMatch ? suggestion.capital : ''}
    </div>
  );
};

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };

    loadCountries();
  }, []);

  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();

    const filteredSuggestions = countries.filter(countryObj => {
      const countryName = countryObj.country ? countryObj.country.toLowerCase() : "";
      const countryCapital = countryObj.capital ? countryObj.capital.toLowerCase() : "";
      
      return (
        countryName.includes(inputValue) || 
        countryCapital.includes(inputValue)
      );
    });

    setSuggestions(filteredSuggestions);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setValue(suggestion.country); // Set the value to the country name when clicked
    setSelectedCountry(suggestion); // Set the selected country data
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const handleSearchClick = () => {
    const country = countries.find(
      (countryObj) =>
        countryObj.country.toLowerCase() === value.toLowerCase() ||
        countryObj.capital.toLowerCase() === value.toLowerCase()
    );
    if (country) {
      setSelectedCountry(country);
    } else {
      alert('Country or capital not found!');
    }
  };

  const inputProps = {
    placeholder: 'Search for a country or capital...',
    value,
    onChange
  };

  return (
    <div className="search-bar-container">
      <h1>Fast Finder Search Bar</h1>
      <div className="search-bar">
        {/* Autosuggest input field with icon */}
        <div className="input-container">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={(suggestion) => suggestion.country}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
          <i className="fa fa-search search-icon"></i> {/* Search icon */}
        </div>
        
        {/* Search Button */}
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>

      {/* Render additional country details when a country is selected */}
      {selectedCountry && (
        <div className="country-details">
          <h2>{selectedCountry.country}</h2>
          <p><strong>Capital:</strong> {selectedCountry.capital}</p>
          <p><strong>Population:</strong> {selectedCountry.population}</p>
          <p><strong>Currency:</strong> {selectedCountry.currency}</p>
          <p><strong>Official Language(s):</strong> {Array.isArray(selectedCountry.official_language) ? selectedCountry.official_language.join(', ') : selectedCountry.official_language}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
