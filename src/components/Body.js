import React, { useState } from 'react';
import config from "../catbot/config";
import ActionProvider from '../catbot/ActionProvider';
import MessageParser from "../catbot/MessageParser";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import { createContext } from 'react';

export const OptionsContext=createContext({
  i: '',
  setI: ()=>{}
});

const Body = () => {
  const [x, setX]=useState(0);
  return (
    <div className="body">
      <OptionsContext.Provider value={{i: x, setI: setX}}>
      <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
        </OptionsContext.Provider>
      </div>
  )
}

export default Body;