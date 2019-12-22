import React from 'react';
import Book from './Book';

class SearchBooksResults extends React.Component {
  render() {
    const { searchBooks, myBooks, onMove } = this.props;

    // Updated the searchBooksResults by comparing it with MyBooks so the shelf will already be selected if a book from the search is already on a shelf
    const updatedBooks = searchBooks.map(book => {
      myBooks.map(b => {
        // If a book id from the search is also in myBooks
        if (b.id === book.id) {
          book.shelf = b.shelf;
        }
        // return the book from myBooks
        return b;
      });
      // return the book from the search results
      return book;
    });

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {updatedBooks.map(book => (
            <Book
              key={book.id}
              book={book}
              shelf={book.shelf ? book.shelf : 'none'} // Select the shelf or not
              onMove={onMove}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default SearchBooksResults;
