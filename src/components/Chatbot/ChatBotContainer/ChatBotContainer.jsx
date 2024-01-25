import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from '../Config';
import MessageParser from '../MessageParser';
import ActionProvider from '../ActionProvider';
import './ChatBotContainer.css';

const ChatBotContainer = () => {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  // const minimizeChatbot = () => {
  //   setChatbotOpen(false);
  // };

  // const maximizeChatbot = () => {
  //   setChatbotOpen(true);
  // };

  return (
    <div className={`chatbot-container ${isChatbotOpen ? 'open' : 'closed'}`}>
      <div className="flex justify-between">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full align al hover:bg-blue-700 hover:hover:duration-300" onClick={toggleChatbot}>
          {isChatbotOpen ? 'Close' : 'Tech Chatbot'}
        </button>
      </div>
      {isChatbotOpen && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
    </div>
  );
};

export default ChatBotContainer;
