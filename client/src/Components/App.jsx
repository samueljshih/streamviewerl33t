import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import StreamPlayer from './StreamPlayer.jsx';
import StreamList from './StreamList.jsx';
import Search from './Search.jsx';
import ReactDOM from 'react-dom';
var searchYoutubeStreams = require('../lib/searchYoutubeStreams');
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      streams: [],
      currentStream: {}
    };

    // Binding event handlers to this context
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStreamEntryClicked = this.handleStreamEntryClicked.bind(this);
  }

  componentDidMount() {
    searchYoutubeStreams('lo fi beats', data => {
      var streams = data.data.items;
      this.setState({
        streams: streams,
        currentStream: streams[0]
      });
    });
  }

  handleStreamEntryClicked(stream) {
    console.log('Clicked', stream);
    this.setState({
      currentStream: stream
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
            <StreamPlayer currentStream={this.state.currentStream} />
          </div>
          <div className="streamList">
            <StreamList
              streams={this.state.streams}
              onStreamEntryClicked={this.handleStreamEntryClicked}
            />
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
