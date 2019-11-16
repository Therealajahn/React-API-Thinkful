import React, { Component } from 'react';
import BookCard from "./BookCard";

class BookList extends React.Component {
  render() {
  return (
    <div className="BookList">
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
  }
}

export default BookList;
