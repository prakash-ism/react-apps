import React, { useEffect, useState } from 'react';
import DataTable from '../DataTable/DataTable';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
    )
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  return (
    <div className="App" data-testid="app-div">
      <SearchBar data={data} setFilteredData={setFilteredData} />
      <DataTable data={filteredData} setFilteredData={setFilteredData} />
    </div>
  );
};

export default App;
