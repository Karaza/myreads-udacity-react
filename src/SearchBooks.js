import React from 'react';
import { Link } from 'react-router-dom';

class SearchBooksInput extends React.Component {
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" />
      </div>
    );
  }
}

class SearchBooksResults extends React.Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">{/* Todo : Book > Bookshelf changes */}</ol>
      </div>
    );
  }
}

class SearchBooks extends React.Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close Search
          </Link>
          <SearchBooksInput />
        </div>
        <SearchBooksResults />
      </div>
    );
  }
}

export default SearchBooks;
