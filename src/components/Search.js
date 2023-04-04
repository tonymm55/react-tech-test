import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {
    const [value, setSearchTerm] = useState();
    
    return (
        <>
          <form className="search-form">
            <input 
                className="search-input" 
                type="text" 
                onChange={(event) => setSearchTerm(event.target.value)} 
            />
            <button className="search-btn" type="submit">
              &#x1F680;
            </button>
          </form>
        </>
    );
};

export default Search;
