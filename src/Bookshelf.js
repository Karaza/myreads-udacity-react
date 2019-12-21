import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {
  render() {
    const { shelf, books } = this.props;

    const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
    // console.log(booksOnThisShelf);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnThisShelf.map(book => (
              <Book
                key={book.title} // Change to id when using API
                book={book}
                // pass the shelf to know where the book is
                shelf={shelf.key}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
