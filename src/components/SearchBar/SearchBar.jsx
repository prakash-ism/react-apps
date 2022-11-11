import React, { useEffect, useState,useCallback } from 'react';
import "./SearchBar.css"

const SearchBar = ({ data,setFilteredData }) => {

    const [searchValue, setSearchValue] = useState("");

    const changeFilteredData = useCallback(newData => {
        setFilteredData(newData);
      }, [setFilteredData]);

    useEffect(() => {
        let newData = data.filter((ele) => {
          return (ele.name.includes(searchValue) || ele.role.includes(searchValue) || ele.email.includes(searchValue))
        });
      
        changeFilteredData(newData);
      }, [data,searchValue,changeFilteredData]);

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