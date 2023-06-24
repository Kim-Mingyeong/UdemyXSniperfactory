import React, { useState } from "react";
function Greetings() {
  const [greetings, setGreetings] = useState("");
  const [paintGreetings, setPaintGreetings] = useState(false);

  const USERNAME_KEY = "username";

  const handleGreetingsChange = (event) => {
    setGreetings(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, greetings);
    setPaintGreetings(true);
  };

  const savedUsername = localStorage.getItem(USERNAME_KEY);
  console.log(savedUsername);

  if (savedUsername === null) {
    if (paintGreetings === false) {
      return (
        <>
          <form id="loginForm" onSubmit={handleFormSubmit}>
            <input
              id="loginInput"
              type="text"
              required
              maxLength={15}
              placeholder="What is your name?"
              onChange={handleGreetingsChange}
            />
          </form>
        </>
      );
    }
  } else {
    return <h2 id="greeting">Hello {savedUsername}!</h2>;
  }
}

export default Greetings;
