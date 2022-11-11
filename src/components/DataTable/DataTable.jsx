import React, { useState, useEffect } from 'react';
import './DataTable.css';
import TableBody from './TableBody/TableBody';
import TableHeader from './TableHeader/TableHeader';
import Footer from './Footer/Footer';

const DataTable = ({ data, setFilteredData }) => {
  const [curPageData, setCurPageData] = useState([]);

  const [checkedState, setCheckedState] = useState([]);

  const [page, selectPage] = useState(1);

  const [editState, setEditState] = useState([]);

  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    let newCurPageData = data.slice((page - 1) * 10, page * 10);
    setCurPageData(newCurPageData);
    setCheckedState(new Array(data.length).fill(false));
    setEditState(new Array(data.length).fill(false));
  }, [data, page, setCheckedState]);

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handleOnSave = (id, modifiedData) => {
    let newCurPageData = [...curPageData];
    modifiedData.name = modifiedData.name || newCurPageData[id - 1].name;
    modifiedData.email = modifiedData.email || newCurPageData[id - 1].email;
    modifiedData.role = modifiedData.role || newCurPageData[id - 1].role;
    newCurPageData[id - 1] = modifiedData;
    setCurPageData(newCurPageData);
    handleOnEditClick(id - 1);
  };

  const deleteSingle = id => {
    let newData = data.filter(ele => ele.id !== id);
    setFilteredData(newData);
  };

  const deleteSelected = () => {
    let newData = data.filter(ele => checkedState[ele.id - 1] === false);
    setFilteredData(newData);
    if (checkAll) {
      setCheckAll(false);
    }
  };

  const handleOnEditClick = position => {
    const updatedEditState = editState.map((item, index) =>
      index === position ? !item : item
    );

    setEditState(updatedEditState);
  };

  return (
    <div className="datatable-container">
      <>
        <table className="data-table">
          <TableHeader
            checkAll={checkAll}
            setCheckAll={setCheckAll}
            checkedState={checkedState}
            curPageData={curPageData}
            setCheckedState={setCheckedState}
          />
          <TableBody
            data={curPageData}
            handleOnChange={handleOnChange}
            checkedState={checkedState}
            deleteSingle={deleteSingle}
            editState={editState}
            handleOnEditClick={handleOnEditClick}
            handleOnSave={handleOnSave}
          />
        </table>
      </>
      <Footer
        dataLength={data.length}
        deleteSelected={deleteSelected}
        page={page}
        setSelectedPage={page => selectPage(page)}
      />
    </div>
  );
};

export default DataTable;
