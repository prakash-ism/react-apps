import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

function App() {

  const [headerTitle,setHeaderTitle] = useState("Name It!");
  const [headerExpanded,setHeaderExpanded] = useState(true);
  const [suggestedNames,setSuggestedNames] = useState([]);
  const [inputValue,setInputValue] = useState("");

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText);
    setInputValue(inputText);
  }

  useEffect(() => {
    const getSuggestedNames = setTimeout(() => {
      setSuggestedNames(inputValue ? name(inputValue) : []);
    },2000);

    return () => clearTimeout(getSuggestedNames);
  },[inputValue]);

  return (
    <div >
      <Header headerTitle={headerTitle} headerExpanded={headerExpanded} />
      <SearchBox handleInputChange={handleInputChange} />
      <ResultsContainer suggestedNames={suggestedNames}/>
    </div>
  );
}

export default App;
