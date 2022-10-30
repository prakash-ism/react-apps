import React from "react";
import "./DataTable.css";
import TableBody from "./TableBody/TableBody";
import TableHeader from "./TableHeader/TableHeader";

const DataTable = ({ data, checkAll, handleAllCheck, handleOnChange, checkedState }) => {
    return (
        <div className="datatable-container">
            <table className="data-table">
                <TableHeader checkAll={checkAll} handleAllCheck={handleAllCheck} />
                <TableBody data={data} handleOnChange={handleOnChange} checkedState={checkedState} />
            </table>
        </div>
    )
}

export default DataTable;