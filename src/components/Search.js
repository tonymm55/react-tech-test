import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults(getImages(value));
  };
  
  return (
      <div className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input 
              className="search-input" 
              type="text" 
              onChange={(event) => setValue(event.target.value)}
          />
          <button className="search-btn" type="submit">
            &#x1F680;
          </button>
        </form>
      </div>
  );
};

export default Search;
