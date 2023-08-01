import React from "react";
import { useState } from "react";


const Options = (props) => {
  const [clicked, setClicked] = useState(true);
  const clickHandler = (e) => {
    setClicked(false);
    return props.actionProvider.handleHello()

  };


  return <div className="options-container">
    {console.log(clicked)}
     <button className="option-button" onClick={clickHandler} style={{ display: clicked ? "visible" : "none" }}>
      Hello
    </button>
  </div>;
};

export default Options;
