class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage= createClientMessage;
    }
    //actions
    greet = () => {
      const message = this.createChatBotMessage("Meow Meow! Hello friend!🐾",{
        delay: 700
      });
      this.addMessageToState(message);
    };

    handleActivity = () => {
      const message2 = this.createClientMessage(
        "What did you do today?",{
        delay: 700,
      }
      );
      this.addMessageToState(message2);
      const message = this.createChatBotMessage(
        "Meow. (I napped and explored around the house.)🐾",{
          delay: 700,
          widget: "options",
        }
      );
      this.addMessageToState(message);
    };
    handleTreat = () => {
      const message2 = this.createClientMessage(
        "How about a treat for being such a good cat?",{
        delay: 700
      }
      );
      this.addMessageToState(message2);
      const message = this.createChatBotMessage(
        "Sounds purr-fect! Meow! Thank you! nom nom nom",{
          delay: 700,
          widget: "options",
        }
      );
      this.addMessageToState(message);
    };
    handlePics = () => {
      const message2 = this.createClientMessage(
        "Share some of your adorable pictures with us? ",{
        delay: 700,
      }
      );
      this.addMessageToState(message2);
      const message = this.createChatBotMessage(
        "Meow. I'll give you one🐾",{
          delay: 700,
          widget:"picture",
        }
      );
      this.addMessageToState(message);
      

    };
  
    handleHow = () => {
      const message2 = this.createClientMessage(
        "Hey there, kitty! How are you today?",{
          delay: 700
        }
      );
      this.addMessageToState(message2);
      const message = this.createChatBotMessage(
        "Meow! I'm doing great, thank you",{
          delay: 700,
          widget: "options",


        }
      );
      this.addMessageToState(message);
    };
    handleBye = () => {
      const message2 = this.createClientMessage(
        "Goodbye, kitty! ",{
          delay: 700
        }
      );
      this.addMessageToState(message2);
      const message = this.createChatBotMessage(
        "Meow! Meow! (Bye bye) 🐱",{
          delay: 700
        }
      );
      this.addMessageToState(message);
      
    };



    //add message to state function
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
 
  
  export default ActionProvider;
  