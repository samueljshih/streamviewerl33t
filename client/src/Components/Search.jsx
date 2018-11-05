import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onInputChange, onSearch, onEnter, value } = this.props;
    return (
      <div>
        <h1>Search</h1>
        <div className="search-bar form-inline">
          <input
            className="form-control"
            type="text"
            onChange={onInputChange}
            onKeyDown={onEnter}
            value={value}
          />
          <button onClick={onSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
