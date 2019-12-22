import React from 'react';

class SearchBooksInput extends React.Component {
  state = {
    query: ''
  };

  updateQuery = oldQuery => {
    this.setState({ query: oldQuery.trim() });
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={this.state.query}
          onChange={e => this.updateQuery(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBooksInput;
