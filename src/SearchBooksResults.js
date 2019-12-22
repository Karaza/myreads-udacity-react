import React from 'react';
import Book from './Book';

class SearchBooksResults extends React.Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.searchBooks.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </ol>
      </div>
    );
  }
}

export default SearchBooksResults;
