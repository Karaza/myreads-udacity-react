import React from 'react';
import BookshelfChanger from './BookshelfChanger';

class Book extends React.Component {
  render() {
    // const { book } = this.props;
    const { book, shelf } = this.props;
    // Add shelf to know where the book is and pass it to the BookshelfChanger

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}
          ></div>
          <BookshelfChanger shelf={shelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
