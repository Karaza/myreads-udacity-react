import React from 'react';
import { Link } from 'react-router-dom';
import SearchBooksInput from './SearchBooksInput';
import SearchBooksResults from './SearchBooksResults';

class SearchBooks extends React.Component {
  render() {
    const { searchBooks, onSearch, onResetSearch } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" onClick={onResetSearch}>
            Close Search
          </Link>
          <SearchBooksInput onSearch={onSearch} />
        </div>
        <SearchBooksResults searchBooks={searchBooks} />
      </div>
    );
  }
}

export default SearchBooks;
