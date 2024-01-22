import React from 'react';
import Chatbot from 'react-chatbot-kit';
import config from '../Config';
import MessageParser from '../MessageParser';
import ActionProvider from '../ActionProvider';
import './ChatBotContainer.css';

const ChatBotContainer = () => {
  return (
    <div className="chatbot-container">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBotContainer;