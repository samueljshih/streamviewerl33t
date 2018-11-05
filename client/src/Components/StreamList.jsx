import React, { Component } from 'react';
import StreamEntry from './StreamEntry.jsx';

const StreamList = props => {
  const { streams, onStreamEntryClicked } = props;
  var count = 0;

  return (
    <div>
      {streams.map(stream => {
        return (
          <StreamEntry
            key={count++}
            stream={stream}
            onStreamEntryClicked={onStreamEntryClicked}
          />
        );
      })}
    </div>
  );
};

export default StreamList;
