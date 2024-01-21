
import React from "react";

import "./ChatOptions.css";

const ChatOptions = (props) => {
  const options = [
    {
      text: "Size and Fit Assistance",
      handler: props.actionProvider.sizeAssistance,
      id: 1,
    },
    { text: "Check out our latest promotions and discounts.", 
    handler: props.actionProvider.checkOutPromos,
    id: 2
  },
    { text: "Stay informed about our company news and updates.",
     handler: props.actionProvider.newsAndUpdate
     , id: 3 
    },
    { text: "Feedback",
     handler: props.actionProvider.feedback,
      id: 4
     },
    { text: "Contact Us",
     handler: props.actionProvider.contact,
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