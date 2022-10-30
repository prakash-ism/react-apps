import React from "react";
import "./Pagination.css"

const Pagination = () => {
    return (
        <div className="pagination-container">
            <button className="page-button previous round">&#8249;&#8249;</button>
            <button className="page-button previous round">&#8249;</button>
            <button className="page-button next round">&#8250;</button>
            <button className="page-button next round">&#8250;&#8250;</button>
        </div>
    )
}

export default Pagination