import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  function changeColor(color) {
    setColor(color);
  }
  return (
    <div className={`w-full h-screen duration-200 bg-${color}`}>
      <div className=" fixed flex flex-wrap justify-center top-0 inset-x-0 px-2 py-2 bg-slate-600">
        <h1 className={`text-3xl text-${color}`}>Color Changer</h1>
      </div>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white"
            onClick={() => changeColor("white")}
          >
            White
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600"
            onClick={() => changeColor("red-600")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600"
            onClick={() => changeColor("blue-600")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-600"
            onClick={() => changeColor("orange-600")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-600"
            onClick={() => changeColor("pink-600")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-600"
            onClick={() => changeColor("purple-600")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-600"
            onClick={() => changeColor("yellow-600")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-indigo-600"
            onClick={() => changeColor("indigo-600")}
          >
            Indigo
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600"
            onClick={() => changeColor("green-600")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black"
            onClick={() => changeColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
