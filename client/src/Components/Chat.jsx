import React, { Component } from 'react';

const Chat = props => {
  var userName = props.chat.authorDetails.displayName;
  var userMessage = props.chat.snippet.displayMessage;
  var avatarUrl = props.chat.authorDetails.profileImageUrl;

  return (
    <div className="chatMessages">
      <img src={avatarUrl} alt="Avatar" class="avatar" />
      <h6>{userName}</h6>
      <p>{userMessage}</p>
    </div>
  );
};

export default Chat;
