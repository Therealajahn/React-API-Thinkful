import React, { Component } from 'react';
import BookCard from "./BookCard";

class BookList extends React.Component {
  static defaultProps = {
    books: []
}
  
render() {
  return (
    <div className="BookList">
      { this.props.books.slice(0,3).map((book) => {
        return(
          <BookCard book={book}/>
        );})
     }
    </div>
  );
  }
 

}



export default BookList;
