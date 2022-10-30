import React from 'react';
import "./SearchBar.css"

const SearchBar = ({ searchValue, setSearchValue }) => {

    return (
        <div className='searchbar-container'>
            <input
                className='search-input'
                value={searchValue}
                placeholder={`Search by name, email or role`}
                onChange={(e) => setSearchValue(e.target.value)} // Use debounce here on the search
            />
        </div>
    )
}

export default SearchBar;