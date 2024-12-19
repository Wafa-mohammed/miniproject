// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';  // Optional: create a separate CSS file for styling

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', from: 'bot' }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (userInput.trim() !== '') {
      setMessages([
        ...messages,
        { text: userInput, from: 'user' },
        { text: `You said: ${userInput}`, from: 'bot' }, // Simple bot response
      ]);
      setUserInput('');
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;