const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; //create array

function saveToDos() {
  //ToDos array의 내용을 local storage에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //just string ["a", "b", "c"]
}

function deleteToDo(event) {
  //event.target : HTML element, 모든 HTML element에는 하나 이상의 property가 있음
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerHTML = "x";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //변수에 input의 현재 value를 복사
  toDoInput.value = ""; //input value 비우기
  //console.log(newTodo, toDoInput.value);
  toDos.push(newTodo); //array에 value저장
  paintToDo(newTodo);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//savedToDos : just string ["a", "b", "c"]
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //parsedToDos : array ["a", "b", "c"]
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
