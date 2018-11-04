import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import StreamPlayer from './StreamPlayer.jsx';
import StreamList from './StreamList.jsx';
import Search from './Search.jsx';
import ReactDOM from 'react-dom';

var fakeData = [
  { title: 'Lo Fi Beats' },
  { title: 'Bounce Bounce' },
  { title: 'Cats and Dogs' },
  { title: 'Raining' },
  { title: 'Sleep' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      streams: [],
      currentStream: null
    };

    // Binding event handlers to this context
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      streams: fakeData
    });
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="searchContainer">
          <Search onInputChange={this.handleInputChange} />
        </div>
        <div className="streamContainer">
          <div className="streamPlayer">
            <StreamPlayer />
          </div>
          <div className="streamList">
            <StreamList streams={this.state.streams} />
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
