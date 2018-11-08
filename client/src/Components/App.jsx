import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import StreamPlayer from './StreamPlayer.jsx';
import StreamList from './StreamList.jsx';
import Search from './Search.jsx';
import ChatBox from './ChatBox.jsx';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Stats from './Stats.jsx';
var searchYoutubeStreams = require('../lib/searchYoutubeStreams');
var searchChatId = require('../lib/searchChatId');
var searchChatMessages = require('../lib/searchChatMessages');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      streams: [],
      currentStream: {},
      chatMessages: [],
      statMessages: []
    };

    // Binding event handlers to this context
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStreamEntryClicked = this.handleStreamEntryClicked.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleSearch() {
    searchYoutubeStreams(this.state.value, data => {
      var streams = data.data.items;
      this.setState({
        streams: streams,
        currentStream: streams[0],
        value: ''
      });
    });
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      searchYoutubeStreams(this.state.value, data => {
        var streams = data.data.items;
        this.setState({
          streams: streams,
          currentStream: streams[0],
          value: ''
        });
      });
    }
  }

  componentDidMount() {
    // Set initial state to lo fi beats
    searchYoutubeStreams('lo fi beats', data => {
      var streams = data.data.items;
      this.setState({
        streams: streams,
        currentStream: streams[0]
      });

      var currentStreamId = this.state.currentStream.id.videoId;
      searchChatId(currentStreamId, data => {
        // Get the Live Chat Id
        var liveChatId =
          data.data.items[0].liveStreamingDetails.activeLiveChatId;
        setInterval(() => {
          searchChatMessages(liveChatId, data => {
            var chats = data.data.items;
            this.postChatData(chats);
            this.setState({
              chatMessages: chats
            });
          });
        }, 500);
      });
    });

    this.getChatStats();
  }

  getChatStats() {
    axios
      .get('http://localhost:3000/chats')
      .then(chats => {
        console.log('Chats', chats);
        this.setState({
          statMessages: chats.data
        });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  postChatData(chats) {
    console.log('Post Data', chats);
    axios
      .post('http://localhost:3000/chats', chats)
      .then(data => {
        console.log('Success', data);
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  handleStreamEntryClicked(stream) {
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
          <Search
            onInputChange={this.handleInputChange}
            onSearch={this.handleSearch}
            onEnter={this.handleEnter}
            value={this.state.value}
          />
        </div>
        <div className="streamContainer">
          <div className="streamPlayerContainer">
            <div className="streamPlayer">
              <StreamPlayer currentStream={this.state.currentStream} />
            </div>
            <div className="chatBoxContainer">
              <ChatBox chatMessages={this.state.chatMessages} />
            </div>
          </div>
          <div className="streamList">
            <StreamList
              streams={this.state.streams}
              onStreamEntryClicked={this.handleStreamEntryClicked}
            />
            <div className="statsContainer">
              <Stats statMessages={this.state.statMessages} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
