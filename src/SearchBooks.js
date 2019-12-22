import React from 'react';
import { Link } from 'react-router-dom';
import SearchBooksInput from './SearchBooksInput';
import SearchBooksResults from './SearchBooksResults';

const SearchBooks = props => {
  const { searchBooks, myBooks, onSearch, onResetSearch, onMove } = props;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" onClick={onResetSearch}>
          Close Search
        </Link>
        <SearchBooksInput onSearch={onSearch} />
      </div>
      <SearchBooksResults
        searchBooks={searchBooks}
        myBooks={myBooks}
        onMove={onMove}
      />
    </div>
  );
};

export default SearchBooks;
