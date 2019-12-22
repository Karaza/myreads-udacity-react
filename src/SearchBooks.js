import React from 'react';
import { Link } from 'react-router-dom';
import SearchBooksInput from './SearchBooksInput';
import SearchBooksResults from './SearchBooksResults';

class SearchBooks extends React.Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close Search
          </Link>
          <SearchBooksInput onSearch={this.props.onSearch} />
        </div>
        <SearchBooksResults searchBooks={this.props.searchBooks} />
      </div>
    );
  }
}

export default SearchBooks;
