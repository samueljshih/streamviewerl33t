import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onInputChange } = this.props;
    return (
      <div>
        <h1>Search</h1>
        <div className="search-bar form-inline">
          <input
            className="form-control"
            type="text"
            onChange={onInputChange}
          />
          <button className="btn hidden-sm-down">
            <span className="glyphicon glyphicon-search" />
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
