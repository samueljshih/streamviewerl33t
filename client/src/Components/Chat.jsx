import React, { Component } from 'react';

const Chat = props => {
  var userName = props.chat.authorDetails.displayName;
  var userMessage = props.chat.snippet.displayMessage;

  return (
    <div className="chatMessages">
      <h6>{userName}</h6>
      <p>{userMessage}</p>
    </div>
  );
};

export default Chat;
