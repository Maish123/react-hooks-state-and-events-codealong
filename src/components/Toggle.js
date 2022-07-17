import React, { useState } from "react";

function Toggle() {
  const[isOn, setIsOn]= useState(false);

  function handleClick(){
    console.log(isOn)
    setIsOn((isOn) => !isOn);
    //! negates a statement 
    console.log(isOn)
  }

  const color = isOn ? "red" : "white";

  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
