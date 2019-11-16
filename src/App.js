import React, { Component } from 'react';
import SearchBar from './component/SearchBar';
import FilterList from './component/FilterList';
import BookList from './component/BookList';
import './App.css';



class App extends React.Component {
  render() {
  return (
    
    <div className="App">
      <header className="header">
        <h1>Hello</h1>
      </header>
      <SearchBar />
      <FilterList/>
      <BookList />
    </div>
  );
  }
}

export default App;
