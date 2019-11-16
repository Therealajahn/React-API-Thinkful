import React, { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList'

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <SearchBar/>
      <FilterableList files={props.files} />
    </div>
  );
  }
}

export default App;
