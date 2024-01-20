
import React from "react";

import "./ChatOptions.css";

const ChatOptions = (props) => {
  const options = [
    {
      text: "Size and Fit Assistance",
      handler: props.actionProvider.sizeAssistance,
      id: 1,
    },
    { text: "Data visualization", 
    handler: props.actionProvider.handleJavacriptList,
    id: 2
  },
    { text: "APIs",
     handler: props.actionProvider.handleJavacriptList
     , id: 3 
    },
    { text: "Security",
     handler: props.actionProvider.handleJavacriptList,
      id: 4
     },
    { text: "Interview prep",
     handker: props.actionProvider.handleJavacriptList,
      id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default ChatOptions;