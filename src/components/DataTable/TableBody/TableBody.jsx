import React, { useState } from "react";
import deleteLogo from "../../../assets/images/deleteLogo.svg";
import editLogo from "../../../assets/images/editLogo.svg";
import saveLogo from "../../../assets/images/saveLogo.svg";

const TableBody = ({ data, handleOnChange, checkedState, deleteSingle,editState, handleOnEditClick, handleOnSave }) => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [role,setRole] = useState("");

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
                            {editState[row.id-1] ?
                                <input 
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            : row.name}
                        </td>
                        <td className="table-data">
                        {editState[row.id-1] ?
                                <input 
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            : row.email}
                        </td>
                        <td className="table-data">
                            {
                               editState[row.id-1] ? 
                               <select
                                value={role} 
                                onChange={(e) => setRole(e.target.value)} 
                                name="role" 
                                id="role"
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="Member">Member</option>
                               </select> 
                               : 
                            row.role
                            }
                        </td>
                        <td className="table-data">
                            {editState[row.id-1] ?
                                <span onClick={() => handleOnSave(row.id, { id: row.id, name, email, role })}><img src={saveLogo} alt="edit icon" /></span>
                            : 
                            <>
                                <span onClick={() => handleOnEditClick(row.id -1 )}><img src={editLogo} alt="edit icon" /></span>
                                <span onClick={() => deleteSingle(row.id)}><img src={deleteLogo} alt="delete icon" /></span> 
                            </>
                            }
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody;