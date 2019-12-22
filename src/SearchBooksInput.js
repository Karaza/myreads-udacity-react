import React from 'react';

class SearchBooksInput extends React.Component {
  state = {
    searchValue: ''
  };

  handleSearch = e => {
    const query = e.target.value;
    this.setState({ searchValue: query }, () => {
      this.props.onSearch(query);
    });
    // console.log(this.state);
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={this.state.searchValue}
          onChange={this.handleSearch}
          autoFocus
        />
      </div>
    );
  }
}

export default SearchBooksInput;
