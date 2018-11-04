import React, { Component } from 'react';

class StreamPlayer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Stream Player</h1>
        <div className="streamVideoPlayer">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/hHW1oY26kxQ`}
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default StreamPlayer;
