import Todos from "./components/Todos";
import "./App.css";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
