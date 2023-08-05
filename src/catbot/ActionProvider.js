class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage= createClientMessage;
    }
    
    greet = () => {
      const message = this.createChatBotMessage("Meow Meow! Hello friend!🐾");
      this.addMessageToState(message);
    };

    handleActivity = () => {
      const message2 = this.createClientMessage(
        "What did you do today?",
      );
      this.addMessageToState(message2);
      const message = this.createChatBotMessage(
        "Meow. (I napped and explored around the house.)🐾",{
          widget: "options",
        }
      );
      this.addMessageToState(message);
    };

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  