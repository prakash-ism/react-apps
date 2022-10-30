import React , { useEffect, useState } from 'react';
import DataTable from '../DataTable/DataTable';
import SearchBar from '../SearchBar/SearchBar';
import Footer from "../Footer/Footer"
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  const [curPageData,setCurPageData] = useState([]);

  const [filteredData,setFilteredData] = useState([]);
  
  const [checkedState, setCheckedState] = useState([]);

  const [checkAll, setCheckAll] = useState(false);

  const [page,selectPage] = useState(1);

  const [searchValue, setSearchValue] = useState("");

useEffect(() => {
  fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setData(data);
    setFilteredData(data);
    setCheckedState(new Array(data.length).fill(false));
  }
    );
},[])

useEffect(() => {
  let newCurPageData = filteredData.slice((page - 1)*10,page*10);

  setCurPageData(newCurPageData);
},[filteredData,page]);

useEffect(() => {
  let newData = data.filter((ele) => {
    return (ele.name.includes(searchValue) || ele.role.includes(searchValue) || ele.email.includes(searchValue))
  });

  setFilteredData(newData);
}, [searchValue]);

const handleOnChange = (position) => {

  const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
  );

  setCheckedState(updatedCheckedState);
}

const handleAllCheck = () => {
  setCheckAll(!checkAll);

  let newCheckedState = checkedState;

  curPageData.forEach(element => newCheckedState[element.id-1] = true);

  setCheckedState(newCheckedState);
}

const deleteSelected = () => {
  let newData = filteredData.filter((ele) => checkedState[ele.id-1] === false);
  setFilteredData(newData);
  if(checkAll){
    setCheckAll(false);
  }
}

const deleteSingle = (id) => {
  console.log("*",id);
  // let newCheckedState = checkedState;
  // newCheckedState[id-1] = true;
  // setCheckedState(newCheckedState);

  let newData = filteredData.filter((ele) => ele.id !== id);
  setFilteredData(newData);
}

  return (
    <div className="App">
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue} 
      />
      <DataTable 
        data={curPageData} 
        checkAll={checkAll} 
        handleAllCheck={handleAllCheck} 
        handleOnChange={handleOnChange} 
        checkedState={checkedState}
        deleteSingle={deleteSingle}
      />
      <Footer 
        dataLength={filteredData.length}
        deleteSelected={deleteSelected} 
        page={page} 
        setSelectedPage={(page) => selectPage(page)} 
      />
    </div>
  );
}

export default App;
