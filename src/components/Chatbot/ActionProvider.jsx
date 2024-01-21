import LinkList from "./LinkList/LinkList";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, how can i help you today?")
      this.updateChatbotState(greetingMessage)
    }

    standardAnswer = () => {
      const answer= this.createChatBotMessage("I'm sorry but I am currently still in development so my functionality is limited, can i help you with any of those topics?",
      {
        widget: "learningOptions"
      }
      );
      this.updateChatbotState(answer)
      
      
    }
    // Size Query function
    sizeAssistance = () => {
      const message = this.createChatBotMessage(
        "Great! Let me help you find your perfect size.",
        {
          widget: "sizeOptions",
        }
      );
  
      this.updateChatbotState(message);
    };

    // Promotion Function 
    checkOutPromos = () => {
      const message = this.createChatBotMessage(
        "Check our latest promotions",
        {
          widget: "promotionsAndDiscount",
        }
      );
      this.updateChatbotState(message);
    }
  
    // Company news and Updates

    newsAndUpdate = () => {
      const message = this.createChatBotMessage(
        "Sure, what would you like to know?",
        {
          widget: "newsAndUpdates",
        }
      );
      this.updateChatbotState(message);
    }

    // Feedback
    feedback = () => {
      const message = this.createChatBotMessage(
        "How did we do? Leave your feedback here",
        {
          widget: "feedback",
        }
      );
      this.updateChatbotState(message);
    }

    // Contact Us 
    contact = () => {
      const message = this.createChatBotMessage(
        "Sure, where would you like to contact the team?",
        {
          widget: "contact",
        }
      );
      this.updateChatbotState(message);
    }
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }

  
  export default ActionProvider;