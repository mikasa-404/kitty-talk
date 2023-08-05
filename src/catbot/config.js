import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options";

const config = {
  botName: "Eve",
  initialMessages: [
    createChatBotMessage(`Meow! (Hello!) 🐱`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
