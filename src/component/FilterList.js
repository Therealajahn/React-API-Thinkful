import React, { Component } from 'react';

class FilterList extends React.Component {
  render() {
  return (
    
    <div className="FilterList">
      <form className="searchForm">
          
          <label htmlFor="bar" className="search-label">
          Print Type
              <select>
                  <option>
                      None
              </option>
              </select>
              </label>
              <label htmlFor="bar" className="search-label">
          Book Type
              <select>
                  <option>
                      None
              </option>
              </select>
              </label>    
           
          </form>
    </div>
  );
  }
}

export default FilterList;
