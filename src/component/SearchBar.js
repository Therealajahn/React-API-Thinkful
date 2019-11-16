import React, { Component } from 'react';


class SearchBar extends React.Component {
  render() {
  return (
    
    <div className="SearchBar">
      <form className="searchForm">
          <label for="bar" className="search-label">
              Search:
              <input type="text"
              placeholder="something"
              classname="search-input"></input>
              </label>
           <button type="submit"
           className="search-button">Search</button>   
          </form>
      
    </div>
  );
  }
}

export default SearchBar;