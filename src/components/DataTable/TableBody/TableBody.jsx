import React from "react";
import deleteLogo from "../../../assets/images/deleteLogo.svg";
import editLogo from "../../../assets/images/editLogo.svg";

const TableBody = ({ data, handleOnChange, checkedState }) => {
    return (
        <tbody>
            {data.map((row) => {
                return (
                    <tr key={row.id} className="table-row">
                        <td className="table-data">
                            <label
                                htmlFor={row.id}
                                className="visuallyhidden"
                            >
                                Click to select this checkbox
                            </label>
                            <input
                                type="checkbox"
                                id={row.id}
                                checked={checkedState[row.id - 1]}
                                onChange={() => handleOnChange(row.id - 1)}
                            />
                        </td>
                        <td className="table-data">
                            {row.name}
                        </td>
                        <td className="table-data">
                            {row.email}
                        </td>
                        <td className="table-data">
                            {row.role}
                        </td>
                        <td className="table-data">
                            <span><img src={editLogo} alt="edit icon" /></span>
                            <span><img src={deleteLogo} alt="delete icon" /></span>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody;