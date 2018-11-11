import React, { Component } from 'react';

const Chat = props => {
  var userName = props.chat.authorDetails.displayName;
  var userMessage = props.chat.snippet.displayMessage.substring(0, 80);
  var avatarUrl = props.chat.authorDetails.profileImageUrl;

  return (
    <div className="chatMessages">
      <div className="chatAvatar">
        <img src={avatarUrl} alt="Avatar" class="avatar" />
      </div>
      <div className="chatUserDetails">
        <h6 className="chatUserName">{userName}</h6>
        <p>{userMessage}</p>
      </div>
    </div>
  );
};

export default Chat;
