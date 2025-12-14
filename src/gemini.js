// Example File: src/Gemini.js

// **1. Access the API Key from .env**
// Vite/React handles this automatically via import.meta.env
const apiKey = import.meta.env.VITE_GEMINI_API_KEY; 

// **2. New Import Statement (Note the change: @google/genai)**
import {
  GoogleGenAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/genai";

// --- Client Initialization ---
if (!apiKey) {
    throw new Error("VITE_GEMINI_API_KEY is not set. Check your .env file.");
}
const ai = new GoogleGenAI({ apiKey }); // New class name is GoogleGenAI

// --- Configuration ---
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

// **3. Async Function using the new Chat Session**
async function runChat(userPrompt) {
  // Create a chat session with the model and configuration
  const chat = ai.chats.create({
    model: "gemini-2.5-flash", // Recommended fast chat model
    config: {
        ...generationConfig
    },
    // Add safety settings if needed (recommended for a voice assistant)
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ],
  });

  const result = await chat.sendMessage({
      message: userPrompt, // Your input message
  });

  console.log(result.text);
  return result.text; // Return the text response
}

export { runChat };