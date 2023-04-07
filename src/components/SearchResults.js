/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import "../styles/search-results.css";
// import getImages from '../requests/getImages';

const SearchResults = ({ results }) => {
  if (!results || !results.length) {
      return <p className="no-results">No Results</p>;
  } else {
      return (
          <>
            <p className="search-results-title"> Search Results</p>
            <div className="search-results">
              {results.map((image) => (
                <img
                key={image.id}
                className="card-image"
                src={image}
                alt="spaceImage"
                />
              ))}
            </div>
          </>
      );
  };
}

export default SearchResults;