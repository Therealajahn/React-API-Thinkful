import React, { Component } from 'react';


class BookCard extends React.Component {
  render() {
  return (
    
    <div className="BookCard">
      <h2 className="book-title">Title</h2>
      <div className="book-container">
          <div className="book-cover"></div>
          <div className="book-info">
              <p>Author</p>
              <p>Price</p>
              <p>Description</p>
          </div>
      </div>
      
    </div>
  );
  }
}

export default BookCard;