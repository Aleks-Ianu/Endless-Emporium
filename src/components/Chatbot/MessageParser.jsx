class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("feedback")) {
        this.actionProvider.feedback();
      }
      if (lowerCaseMessage.includes("contact")) {
        this.actionProvider.contact();
      }
      if (lowerCaseMessage.includes("size")) {
        this.actionProvider.sizeAssistance();
      }
      if (lowerCaseMessage.includes("prom")) {
        this.actionProvider.checkOutPromos();
      }
      if (lowerCaseMessage.includes("dis")) {
        this.actionProvider.checkOutPromos();
      }
      else {
        this.actionProvider.standardAnswer();
      }
    }
  }
  
  export default MessageParser;