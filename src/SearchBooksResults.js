import React from 'react';

class SearchBooksResults extends React.Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">{/* Todo : Book > Bookshelf changes */}</ol>
      </div>
    );
  }
}

export default SearchBooksResults;
