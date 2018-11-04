import React, { Component } from 'react';

const StreamEntry = props => {
  const { stream } = props;

  return (
    <div>
      <h1>{stream.title}</h1>
    </div>
  );
};

export default StreamEntry;
