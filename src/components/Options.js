import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { OptionsContext } from "./Body";

const Options = (props) => {
  const {i, setI}=useContext(OptionsContext);
  console.log(i, setI);
  const [displayButton, setDisplayButton] = useState(true);
  const options=[
   
    {
      name: "Ask how are you",
      handler: props.actionProvider.handleHow,
    },
    {
      name: "Ask for pictures",
      handler: props.actionProvider.handlePics,
    },
    {
      name: "Ask what she did today",
      handler: props.actionProvider.handleActivity,
    },
    {
      name: "Give treat",
      handler: props.actionProvider.handleTreat,
    },
    {
      name: "Say Bye!",
      handler: props.actionProvider.handleBye,
    }

  ]

  // 
  return <div className="options-container" style={{ display: displayButton ? "visible" : "none" }}>
     <button className="option-button" onClick={()=>{
      setDisplayButton(false);
      setI(i+1);
      console.log(i);
      return options[i].handler();
     }}>
      {i===options.length ? "": options[i].name}
    </button> 
  </div>;
};

export default Options;
