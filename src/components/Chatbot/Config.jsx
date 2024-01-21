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
    //   sizeOption query
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
              text: "Looking for fit tips? I've got you covered!",
              url:
                "https://sortedclothing.in/blog/guide-to-finding-the-perfect-fit-for-your-body-type",
              id: 2,
            }, 
    ],
  },
},
{
  widgetName: "promotionsAndDiscount",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        text: "Promotions",
        url:
          "",
        id: 1,
      },
      {
        text: "Latest Products",
        url:
          "",
        id: 2,
      }, 
],
},
},
{
  widgetName: "feedback",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        text: "Feedback",
        url:
          "",
        id: 1,
      },
      {
        text: "Share with friends and family",
        url:
          "",
        id: 2,
      }, 
],
},
},
{
  widgetName: "contact",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        text: "LinkedIn",
        url:
          "https://www.linkedin.com/in/aleksander-ianulardo-77960b247/",
        id: 1,
      },
      {
        text: "Github",
        url:
          "https://github.com/Aleks-Ianu",
        id: 2,
      },
      {
        text: "email",
        url:
          "mailto:ianu.aleks@gmail.com",
        id: 2,
      }, 
],
},
}
    ],
};
  
  export default config;