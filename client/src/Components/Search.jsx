import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <div className="search-bar form-inline">
          <input
            className="form-control"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange.bind(this)}
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
