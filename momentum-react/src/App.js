import "./App.css";
import Greetings from "./components/greetings";
import Clock from "./components/clock";
import Background from "./components/background";
import Todo from "./components/todo";

function App() {
  return (
    <>
      <Greetings />
      <Clock />
      <Background />
      <Todo />
    </>
  );
}

export default App;
