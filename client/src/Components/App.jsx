import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import StreamPlayer from './StreamPlayer.jsx';
import StreamList from './StreamList.jsx';
import Search from './Search.jsx';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="searchContainer">
          <Search />
        </div>
        <div className="streamContainer">
          <div className="streamPlayer">
            <StreamPlayer />
          </div>
          <div className="streamList">
            <StreamList />
          </div>
          {/* <button type="button" class="btn btn-primary">
            {' '}
            MY APP{' '}
          </button> */}
        </div>
      </div>
    );
  }
}

export default App;
