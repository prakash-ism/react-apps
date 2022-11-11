import React from 'react';

const TableHeader = ({
  checkAll,
  setCheckAll,
  checkedState,
  curPageData,
  setCheckedState,
}) => {
  const handleAllCheck = () => {
    setCheckAll(!checkAll);

    let newCheckedState = checkedState;

    curPageData.forEach(
      element => (newCheckedState[element.id - 1] = !checkAll)
    );

    setCheckedState(newCheckedState);
  };

  return (
    <thead>
      <tr className="table-row">
        <th className="table-head">
          <label htmlFor="select_all_checkboxes" className="visuallyhidden">
            Select all checkboxes
          </label>
          <input
            type="checkbox"
            id="select_all_checkboxes"
            checked={checkAll}
            onChange={() => handleAllCheck()}
          />
        </th>
        <th className="table-head">Name</th>
        <th className="table-head">Email</th>
        <th className="table-head">Role</th>
        <th className="table-head">Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
