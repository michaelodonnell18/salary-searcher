import React from 'react'

function SearchBar({ placeholder, data }) {
    return (
        <div className="search">
            <div className="searchInputs"></div>
                <input type="text" placeholder={placeholder}/>
                <div> className="searchIcon"</div>
            <div className="dataResults"></div>
        </div>
    ) 
}

export default SearchBar;