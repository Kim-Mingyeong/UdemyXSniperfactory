const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CALSSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기

//첫 번째 argument로 발생된 event에 대한 정보 제공
function onLoginSubmit(event) {
  event.preventDefault(); //preventDefault(): event의 기본 행동이 발생되지 않도록 막는 메서드
  loginForm.classList.add(HIDDEN_CALSSNAME);
  const username = loginInput.value;
  console.log(username);
  localStorage.setItem("username", username);

  greeting.innerText = `Hello ${username} !`; // = "Hello " + username
  greeting.classList.remove(HIDDEN_CALSSNAME);
}

//event가 발생했을 때 function 호출
loginForm.addEventListener("submit", onLoginSubmit);
