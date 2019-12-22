import React from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './BooksAPI';
import './App.css';

const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  // Debounce (from the throttle-debounce package) is used for rate limiting execution of handlers
  searchForBooks = debounce(300, false, query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        this.setState({ searchBooks: books });
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks bookshelves={bookshelves} books={this.state.books} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              onSearch={this.searchForBooks}
              searchBooks={this.state.searchBooks}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
