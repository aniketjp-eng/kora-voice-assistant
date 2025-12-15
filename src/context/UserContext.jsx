import React, { createContext } from "react";
import { runChat } from "../gemini";
export const datacontext = createContext();

function UserContext({children}) {
    function speak(text) {
        let text_speak = new SpeechSynthesisUtterance(text)
        text_speak.volume = 1;
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.lang = "hi-GB";
        window.speechSynthesis.speak(text_speak);
    }

    async function aiResponse(prompt) {
        let text = await runChat(prompt);
        speak(text);
    };

    let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition

    let recognition = new speechRecognition();
    recognition.onresult = ((e) => {
        let transciptResult = (e.results[0])[0].transcript;
          console.log(transciptResult);
          aiResponse(transciptResult);
    }

)

    let value = {
        recognition
    };
    return (
        <div>
            <datacontext.Provider value={value}>
                {children}
            </datacontext.Provider>
        </div>
    )
}

export default UserContext;
