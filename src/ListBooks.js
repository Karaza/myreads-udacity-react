import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class ListBooks extends React.Component {
  render() {
    const { bookshelves, books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelves.map(shelf => (
              <Bookshelf key={shelf.key} shelf={shelf} books={books} />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
