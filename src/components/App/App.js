import React, { useCallback, useEffect, useState } from 'react';
import DataTable from '../DataTable/DataTable';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  const [curPageData, setCurPageData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [checkedState, setCheckedState] = useState([]);

  const [editState, setEditState] = useState([]);

  const [checkAll, setCheckAll] = useState(false);

  const [page, selectPage] = useState(1);

  useEffect(() => {
    fetch(
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
    )
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data);
        setCheckedState(new Array(data.length).fill(false));
        setEditState(new Array(data.length).fill(false));
      });
  }, []);

  useEffect(() => {
    let newCurPageData = filteredData.slice((page - 1) * 10, page * 10);

    setCurPageData(newCurPageData);
  }, [filteredData, page]);

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handleOnEditClick = position => {
    const updatedEditState = editState.map((item, index) =>
      index === position ? !item : item
    );

    setEditState(updatedEditState);
  };

  const handleAllCheck = () => {
    setCheckAll(!checkAll);

    let newCheckedState = checkedState;

    curPageData.forEach(element => (newCheckedState[element.id - 1] = true));

    setCheckedState(newCheckedState);
  };

  const deleteSelected = () => {
    let newData = filteredData.filter(
      ele => checkedState[ele.id - 1] === false
    );
    setFilteredData(newData);
    if (checkAll) {
      setCheckAll(false);
    }
  };

  const deleteSingle = id => {
    let newData = filteredData.filter(ele => ele.id !== id);
    setFilteredData(newData);
  };

  const changeFilteredData = useCallback(newData => {
    setFilteredData(newData);
  }, []);

  const handleOnSave = (id, modifiedData) => {
    let newCurPageData = [...curPageData];
    modifiedData.name = modifiedData.name || newCurPageData[id - 1].name;
    modifiedData.email = modifiedData.email || newCurPageData[id - 1].email;
    modifiedData.role = modifiedData.role || newCurPageData[id - 1].role;
    newCurPageData[id - 1] = modifiedData;
    setCurPageData(newCurPageData);
    handleOnEditClick(id - 1);
  };

  return (
    <div className="App" data-testid="app-div">
      <SearchBar data={data} changeFilteredData={changeFilteredData} />
      <DataTable
        data={curPageData}
        checkAll={checkAll}
        handleAllCheck={handleAllCheck}
        handleOnChange={handleOnChange}
        checkedState={checkedState}
        deleteSingle={deleteSingle}
        editState={editState}
        handleOnEditClick={handleOnEditClick}
        handleOnSave={handleOnSave}
      />
      <Footer
        dataLength={filteredData.length}
        deleteSelected={deleteSelected}
        page={page}
        setSelectedPage={page => selectPage(page)}
      />
    </div>
  );
};

export default App;
