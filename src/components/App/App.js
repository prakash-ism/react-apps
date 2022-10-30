import React , { useState } from 'react';
import DataTable from '../DataTable/DataTable';
import SearchBar from '../SearchBar/SearchBar';
import Footer from "../Footer/Footer"
import './App.css';

function App() {
  const [data, setData] = useState([
    {
        "id": "1",
        "name": "Aaron Miles",
        "email": "aaron@mailinator.com",
        "role": "member"
    },
    {
        "id": "2",
        "name": "Aishwarya Naik",
        "email": "aishwarya@mailinator.com",
        "role": "member"
    },
    {
        "id": "3",
        "name": "Arvind Kumar",
        "email": "arvind@mailinator.com",
        "role": "admin"
    }
]);
 
const [checkedState, setCheckedState] = useState(
  new Array(data.length).fill(false)
);

const [checkAll, setCheckAll] = useState(false);


const handleOnChange = (position) => {

  const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
  );

  setCheckedState(updatedCheckedState);
}

const handleAllCheck = () => {
  setCheckAll(!checkAll);

  setCheckedState(new Array(data.length).fill(!checkAll));
}

const deleteSelected = () => {
  console.log("checkedState",checkedState);
  let newData = data.filter((ele) => checkedState[ele.id-1] === false);
  setData(newData);
}

  return (
    <div className="App">
      <SearchBar />
      <DataTable 
        data={data} 
        checkAll={checkAll} 
        handleAllCheck={handleAllCheck} 
        handleOnChange={handleOnChange} 
        checkedState={checkedState} 
      />
      <Footer deleteSelected={deleteSelected} />
    </div>
  );
}

export default App;
