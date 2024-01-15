import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    /* Wrong Way
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);*/
    // Right Way
    setCounter((prevCounter) => prevCounter + 1); // It takes the current value of counter and updates it separately thus when next time setCounter is called it gets the updated value of counter as callback must be resolved first
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <>
      <h1>React Counter Project with Navneet {counter} </h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer : {counter} </p>
    </>
  );
}

export default App;
