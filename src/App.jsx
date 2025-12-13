import React from "react";
import "./App.css";
import va from "./assets/ai.png";
import { CiMicrophoneOn } from "react-icons/ci";

function App(){
  return (
  <div className="main">
    <img src={va} alt="Image Error"  id="kora"/>
    <span>I'm Kora,you personal voice Assistant!</span>
    <button>Click Here <CiMicrophoneOn /></button>
  </div>
  )
}

export default App;