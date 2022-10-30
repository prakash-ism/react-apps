import React, { useState } from 'react';
import "./SearchBar.css"

const SearchBar = () => {

    const [inputValue, setInputValue] = useState("");

    return (
        <div className='searchbar-container'>
            <input
                className='search-input'
                value={inputValue}
                placeholder={`Search by name, email or role`}
                onChange={(e) => setInputValue(e.target.value)} // Use debounce here on the search
            />
        </div>
    )
}

export default SearchBar;