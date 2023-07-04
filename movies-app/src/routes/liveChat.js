import React from "react";
import useChat from "../hooks/useChat";

export default function LiveChat() {
  const {
    username,
    handleUsernameChange,
    inputValue,
    handleTextChange,
    messages,
    handleMessageSend,
  } = useChat();

  console.log(messages);

  return (
    <>
      <h1 className="title" style={{ textAlign: "center" }}>
        Live Chat
      </h1>
      <label for="username">User: </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="사용자 이름"
      />
      <label for="text"> </label>
      <input
        id="text"
        type="text"
        value={inputValue}
        onChange={handleTextChange}
      />
      <button onClick={handleMessageSend}>전송</button>
      <div>
        {messages.map((message, index) => (
          <p key={index} style={{ color: message.color }}>
            {message.username}: {message.content} - {message.time}
          </p>
        ))}
      </div>
    </>
  );
}
