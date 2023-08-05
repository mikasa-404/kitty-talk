import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options";
import Picture from "../components/Picture";

const config = {
  botName: "Eve",
  initialMessages: [
    createChatBotMessage(`Meow! (Hello!) I am Eve! 🐈‍⬛`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "picture",
      widgetFunc: (props) => <Picture {...props} />,
    },
  ],
  customStyles:{
    botMessageBox: {
      backgroundColor: '#2EB62C',
    },
    chatButton: {
      backgroundColor: '#023020',
    },

  }
};

export default config;
