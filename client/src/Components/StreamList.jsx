import React, { Component } from 'react';
import StreamEntry from './StreamEntry.jsx';

const StreamList = props => {
  const { streams } = props;

  return (
    <div>
      {streams.map(stream => {
        return <StreamEntry stream={stream} />;
      })}
    </div>
  );
};

export default StreamList;
