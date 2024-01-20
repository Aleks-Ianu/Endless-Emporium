import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import ChatOptions from "./ChatOptions/ChatOptions";
import LinkList from "./LinkList/LinkList";

const config = {
    botName: "TechBuddy",
    initialMessages: [
      createChatBotMessage("Hi there! 👋 I'm TechBuddy, your friendly tech assistant. How can I help you today?",{
      widget: 'learningOptions',
      }),
    ],
    customStyles: {
      botMessageBox: {
        backgroundColor: "#376B7E",
      },
      chatButton: {
        backgroundColor: "#376B7E",
      },
    },
    widgets: [
      {
        widgetName: "learningOptions",
        widgetFunc: (props) => <ChatOptions {...props} />,
      },
      {
        widgetName: "links",
        widgetFunc: (props) => <LinkList {...props} />,
      },
      {
        widgetName: "sizeOptions",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Here's our size chart.",
              url:
                "https://www.looksize.com/by-brands-a-z",
              id: 1,
            },
            {
              text: "Mozilla JS Guide",
              url:
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
              id: 2,
            },
            {
              text: "Frontend Masters",
              url: "https://frontendmasters.com",
              id: 3,
            }
    ],
  },
},
    ],
};
  
  export default config;