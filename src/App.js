import React from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
// import * as BooksAPI from './BooksAPI'
import './App.css';

const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <ListBooks bookshelves={bookshelves} />}
        />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
