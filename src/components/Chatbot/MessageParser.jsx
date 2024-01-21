class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
          this.actionProvider.greet();
      } else if (lowerCaseMessage.includes("feedback")) {
          this.actionProvider.feedback();
      } else if (lowerCaseMessage.includes("contact")) {
          this.actionProvider.contact();
      } else if (lowerCaseMessage.includes("size")) {
          this.actionProvider.sizeAssistance();
      } else if (lowerCaseMessage.includes("prom") || lowerCaseMessage.includes("dis")) {
          this.actionProvider.checkOutPromos();
      } else {
          this.actionProvider.standardAnswer();
      }
  }
  }

  
  export default MessageParser;