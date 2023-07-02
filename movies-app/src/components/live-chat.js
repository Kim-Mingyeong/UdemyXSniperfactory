import io from "socket.io-client";
import React, { useState, useEffect } from "react";

const socket = io("http://localhost:3001"); // 서버의 URL에 맞게 변경
const MESSAGE = "message";

export default function LiveChat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on(MESSAGE, handleMessage);
    return () => {
      socket.off(MESSAGE, handleMessage);
    };
  }, []);

  const handleMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      socket.emit("message", {
        username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };

  return (
    <>
      <h1 className="title" style={{ textAlign: "center" }}>
        Live Chat
      </h1>

      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="사용자 이름"
      />

      <div>
        {messages.map((message, index) => (
          <p key={index} style={{ color: message.color }}>
            {message.username}: {message.content} - {message.time}
          </p>
        ))}
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleMessageSend}>전송</button>
    </>
  );
}
