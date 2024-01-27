import { useState } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  return (
    <TodoProvider
      value={{ todos, toggleComplete, addTodo, removeTodo, updateTodo }}
    >
      <h1 className="text-3xl font-bold">TODO</h1>
    </TodoProvider>
  );
}

export default App;
