import React, { Component } from 'react';

const StreamEntry = props => {
  const { stream, onStreamEntryClicked } = props;

  return (
    <div className="streamListEntry">
      <div className="media-left">
        <img
          className="streamImage"
          src={stream.snippet.thumbnails.default.url}
        />
      </div>
      <div className="streamTitle">
        <h6 onClick={() => onStreamEntryClicked(stream)}>
          {stream.snippet.title}
        </h6>
      </div>
      <div className="streamDescription">
        <p>{stream.snippet.description}</p>
      </div>
    </div>
  );
};

export default StreamEntry;
