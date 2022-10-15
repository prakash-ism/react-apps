import React, { useState } from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

function App() {

  const [headerTitle,setHeaderTitle] = useState("Name It!");
  const [headerExpanded,setHeaderExpanded] = useState(true);
  const [suggestedNames,setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText);
    setSuggestedNames(inputText ? name(inputText) : []);
  }

  return (
    <div >
      <Header headerTitle={headerTitle} headerExpanded={headerExpanded} />
      <SearchBox handleInputChange={handleInputChange} />
      <ResultsContainer suggestedNames={suggestedNames}/>
    </div>
  );
}

export default App;
