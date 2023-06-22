const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; //create array

function saveToDos() {
  //ToDos array의 내용을 local storage에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //object
}

function deleteToDo(event) {
  //event.target : HTML element, 모든 HTML element에는 하나 이상의 property가 있음
  const li = event.target.parentElement; //li.id : string
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //click한 li.id와 다른 것만 남겨두기
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const button = document.createElement("button");
  button.innerHTML = "❌";
  const span = document.createElement("span");
  span.innerText = newToDo.text;

  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  li.appendChild(span);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //변수에 input의 현재 value를 복사
  toDoInput.value = ""; //input value 비우기
  //console.log(newTodo, toDoInput.value);
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj); // value저장
  paintToDo(newToDoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//savedToDos : just string ["a", "b", "c"]
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //parsedToDos : array ["a", "b", "c"]
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //{text: "a", id:1687439794043}
}
