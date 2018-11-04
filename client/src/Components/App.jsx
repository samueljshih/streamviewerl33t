import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import StreamPlayer from './StreamPlayer.jsx';
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
        <div className="streamContainer">
          <StreamPlayer />
          <button type="button" class="btn btn-primary">
            {' '}
            MY APP{' '}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
