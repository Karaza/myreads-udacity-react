import React, { Component } from 'react';

class BookshelfChanger extends Component {
  state = {
    shelfValue: this.props.shelf
  };

  handleShelfChange = e => {
    const { value } = e.target;
    this.setState({ shelfValue: value });
    this.props.onMove(this.props.book, value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelfValue} onChange={this.handleShelfChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
