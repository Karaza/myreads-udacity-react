import React from 'react';
import Book from './Book';

class SearchBooksResults extends React.Component {
  render() {
    const { searchBooks } = this.props;

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks.map(book => (
            <Book key={book.id} book={book} shelf="none" />
            // <li>Test</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default SearchBooksResults;
