import React, { useEffect, useState } from "react";

function TodoList({ initialTodos }) {
  const [todos, setToDos] = useState(initialTodos);

  useEffect(() => {
    // todos 상태가 업데이트될 때마다 로컬 스토리지에 저장
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), //랜덤 id 생성
      text: text,
      completed: false,
    };
    setToDos((prevTodos) => [...prevTodos, newTodo]);
  };
  const toggleTodo = (id) => {
    setToDos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <ul id="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
      <TodoForm onAddTodo={addTodo} />
    </>
  );
}

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      onAddTodo(text);
      setText("");
    }
  };

  return (
    <form id="todo-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        required
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Write a To Do and Press Enter"
      />
    </form>
  );
}

function Todo() {
  // 로컬 스토리지에서 이전에 저장된 할 일 목록을 불러옴
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || []; //parsedToDos : array ["a", "b", "c"]
  const [todos, setToDos] = useState(savedTodos);
  return <TodoList initialTodos={todos} />;
}
export default Todo;
