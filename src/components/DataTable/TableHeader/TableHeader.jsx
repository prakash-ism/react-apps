import React from 'react';

const TableHeader = ({ checkAll, handleAllCheck }) => {
    return (
        <thead>
            <tr className="table-row">
                <th className="table-head">
                    <label
                        htmlFor="select_all_checkboxes"
                        className="visuallyhidden"
                    >
                        Select all checkboxes
                    </label>
                    <input type="checkbox" id="select_all_checkboxes" checked={checkAll} onChange={() => handleAllCheck()} />
                </th>
                <th className="table-head">Name</th>
                <th className="table-head">Email</th>
                <th className="table-head">Role</th>
                <th className="table-head">Actions</th>
            </tr>
        </thead>
    )
}

export default TableHeader;