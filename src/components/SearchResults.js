/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import "../styles/search-results.css";

const SearchResults = ({ searchResults }) => {
  return (
    <>
      <p className="search-results-title"> Search Results</p>
      <div className="search-results">
        <img
          className="card-image"
          src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="space-image"
        />
      </div>
    </>
  );
};

export default SearchResults;