import React, { Component } from 'react';
import SearchBar from './component/SearchBar';
import FilterList from './component/FilterList';
import BookList from './component/BookList';
import BookCard from './component/BookCard';
import './App.css';



class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
    }
  }

  handleSubmit = () => {
    console.log('handleSubmit');
    const input = document.getElementById("search-input").value;
    this.runFetch(input);
  }  
  
  runFetch = (input)  => {
    
    const apiKey = 'AIzaSyBcW9UxQpoNzco9I4r99heXWBnW76YDo5E'
    const q = input;
    const myURL = `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${apiKey}`

    
  
    
    fetch(myURL)
    .then(result => {
      
      return result.json();
    }).then(resultJson => {
      console.log(resultJson.items);
      this.setState({
      books: resultJson.items,
      // title: resultJson.items[0].volumeInfo.title,
      // authors: resultJson.items[0].volumeInfo.authors ,
      // price: resultJson.items[0].saleInfo.retailPrice.amount,
      // subtitle: resultJson.items[0].volumeInfo.subtitle,
      // imageURL: resultJson.items[0].volumeInfo.imageLinks.smallThumbnail,
      // printType: resultJson.items[0].volumeInfo.printType,
      // bookType: resultJson.items[0].volumeInfo.categories[0]
      })
    })
    .catch(error => console.log(error));
    
  }
  
  

  
  

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Google Book Search</h1>
        </header>
        <SearchBar
        handleSubmit = {this.handleSubmit}
        />
        <FilterList />
        <BookList 
        books={this.state.books}/>
        </div>
    );
  }
}

export default App;
