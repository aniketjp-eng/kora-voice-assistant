import React, { useContext } from "react";
import "./App.css";
import va from "./assets/ai.png";
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from "./context/userContext";

function App(){
  let {recognition} = useContext(datacontext)
  // speak("hello");
  return (
  <div className="main">
    <img src={va} alt="Image Error"  id="kora"/>
    <span>I'm Kora,you personal voice Assistant!</span>
    <button onClick={() => {
      recognition.start()
    }}>Click Here <CiMicrophoneOn /></button>
  </div>
  )
}

export default App;