const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CALSSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기
const USERNAME_KEY = "username"; //string을 반복적으로 사용하는 경우 변수로 고정

//첫 번째 argument로 발생된 event에 대한 정보 제공
function onLoginSubmit(event) {
  event.preventDefault(); //preventDefault(): event의 기본 행동이 발생되지 않도록 막는 메서드
  loginForm.classList.add(HIDDEN_CALSSNAME);
  const username = loginInput.value; //input으로 username 정보를 받아옴
  localStorage.setItem(USERNAME_KEY, username); //local Storage에 username 저장
  paintGreetings(username);
}

//함수의 인자로 username을 받아옴
function paintGreetings(username) {
  greeting.innerText = `Hello ${username} !`; // = "Hello " + username!
  greeting.classList.remove(HIDDEN_CALSSNAME);
}

//local Storage에 저장되어 있는 username 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

//local Storage에 username 정보가 없을 때
if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CALSSNAME);
  //event가 발생했을 때 function 호출
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetins
  paintGreetings(savedUsername); //local Storage에서 username 정보를 인자로 넣어줌
}
