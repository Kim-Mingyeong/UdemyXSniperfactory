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

  //중첩 if문 사용
  //localStorage에 저장된 값을 없거나 input으로부터 받은 정보가 없을 때
  if (savedUsername === null) {
    if (paintGreetings === false) {
      return (
        <>
          <form id="login-form" onSubmit={handleFormSubmit}>
            <input
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
