import React from "react";
import '../index.css';

const SearchBar = ({ onItemsSearch }) => {
    
    let onInputChange = e => {
        onItemsSearch(e.target.value);
    };

    return (
        <input className="searchField"
            placeholder="Filter for what you're looking for here"
            type="text"
            onChange={onInputChange}
        >
        </input>
    )
}

export default SearchBar;