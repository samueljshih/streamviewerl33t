import React, { Component } from 'react';

class StreamPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.currentStream.id) {
      return <div />;
    }
    const { id } = this.props.currentStream;

    return (
      <div>
        <h1>Stream Player</h1>
        <div className="streamVideoPlayer">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${id.videoId}`}
            allowFullScreen
            width="700"
            height="400"
          />
        </div>
      </div>
    );
  }
}

export default StreamPlayer;
