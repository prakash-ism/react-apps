import React from "react";
import "./SearchField.css";

const SearchField = ({ onSearch, isLoading }) => {
  return (
    <div className="input-group-custom">
      <input
        className="form-control-custom"
        placeholder="search"
        onChange={(e) => onSearch(e.target.value)}
      />
      {isLoading && (
        <span className="position-absolute-custom">...loading</span>
      )}
    </div>
  );
};

export default SearchField;
