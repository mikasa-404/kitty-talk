import React from 'react';
import config from "../catbot/config";
import ActionProvider from '../catbot/ActionProvider';
import MessageParser from "../catbot/MessageParser";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'


const Body = () => {
  return (
    <div className="body">
      <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
  )
}

export default Body