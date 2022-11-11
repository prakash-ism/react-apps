import React from "react";
import Pagination from "./Pagination/Pagination";
import "./Footer.css";

const Footer = ({ deleteSelected, dataLength, page, setSelectedPage }) => {
    return (
        <div className="footer-container">
            <div className="multi-select-button-container">
                <button className="delete-button" onClick={() => deleteSelected()}>Delete Selected</button>
            </div>
            <Pagination
                dataLength={dataLength}
                page={page}
                setSelectedPage={setSelectedPage}
            />
        </div>
    )
}

export default Footer;