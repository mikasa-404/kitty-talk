import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options";
import Picture from "../components/Picture";

const config = {
  botName: "Eve",
  initialMessages: [
    createChatBotMessage(`Meow! (Hello!) I am Eve! 🐈‍⬛`, {
      widget: "options",
      delay: 500,
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
      backgroundColor: '#83af65',
    },
    chatButton: {
      backgroundColor: '#097969',
    },

  }
};

export default config;
