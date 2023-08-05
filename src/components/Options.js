import React from "react";
import { useState } from "react";
import { useContext } from "react";
import OptionsContext from "./OptionsContext";


const Options = (props) => {
  const {i}=useContext(OptionsContext);
  const [displayButton, setDisplayButton] = useState(true);
  const options=[
    {
      name: "Ask what she did today",
      handler: props.actionProvider.handleActivity,
    },
    {
      name: "Ask how are you",
      handler: ()=>{},
    }
  ]

  // 
  return <div className="options-container" style={{ display: displayButton ? "visible" : "none" }}>
     <button className="option-button" onClick={()=>{
      setDisplayButton(false);
      console.log(i);
      return options[i].handler();
     }}>
      {options[i].name}
    </button>
  </div>;
};

export default Options;
