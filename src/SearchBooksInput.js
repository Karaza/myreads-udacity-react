import React from 'react';

class SearchBooksInput extends React.Component {
  state = {
    search: ''
  };

  handleSearch = e => {
    const query = e.target.value;
    this.setState({ search: query }, () => {
      this.props.onSearch(query);
    });
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={this.state.search}
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

export default SearchBooksInput;
