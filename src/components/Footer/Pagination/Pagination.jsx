import React from "react";
import "./Pagination.css"

const Pagination = ({ dataLength, page, setSelectedPage }) => {

    const numberOfPages = new Array(Math.ceil(dataLength / 10)).fill(0);

    return (
        <div className="pagination-container">
            <button
                className={`page-button ${page === 1 ? 'inactive' : 'active'}`}
                onClick={() => setSelectedPage(0)}
                disabled={page === 1}
            >
                &#8249;&#8249;
            </button>
            <button
                className={`page-button ${page === 1 ? 'inactive' : 'active'}`}
                onClick={() => setSelectedPage(page - 1)}
                disabled={page === 1}
            >
                &#8249;
            </button>
            {
                numberOfPages.map((value, index) => {
                    return (
                        <button
                            key={index}
                            className={`page-button ${page === index + 1 ? 'selected' : 'not-selected'}`}
                            onClick={() => {
                                setSelectedPage(index + 1)
                            }}
                        >
                            {index + 1}
                        </button>
                    )
                })
            }
            <button
                className={`page-button ${page === numberOfPages.length ? 'inactive' : 'active'}`}
                onClick={() => setSelectedPage(page + 1)}
                disabled={page === numberOfPages.length}
            >
                &#8250;
            </button>
            <button
                className={`page-button ${page === numberOfPages.length ? 'inactive' : 'active'}`}
                onClick={() => setSelectedPage(numberOfPages.length)}
                disabled={page === numberOfPages.length}
            >
                &#8250;&#8250;
            </button>
        </div >
    )
}

export default Pagination