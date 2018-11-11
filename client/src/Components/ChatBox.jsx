import React, { Component } from 'react';
import Chat from './Chat.jsx';

const ChatBox = props => {
  var count = 0;

  return (
    <div className="chatBox">
      <div className="messages">
        {props.chatMessages.map(chat => {
          return <Chat chat={chat} key={count++} />;
        })}
      </div>
    </div>
  );
};

export default ChatBox;
