import React from 'react';
import BookshelfChanger from './BookshelfChanger';

class Book extends React.Component {
  render() {
    const { book, shelf, onMove } = this.props;
    // Add shelf to know where the book is and pass it to the BookshelfChanger

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : 'icons/book-placeholder.svg'
              })`
            }}
          ></div>
          <BookshelfChanger book={book} shelf={shelf} onMove={onMove} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
