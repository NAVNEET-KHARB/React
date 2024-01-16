import { useState } from "react";
import img1 from "./assets/bg1.jpg";
import img2 from "./assets/Screenshot 2024-01-15 222221.png";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-400 p-4 rounded-2xl">
        Vite with Tailwind
      </h1>
      <Card userName="Navneet" post="Data Scientist" imgAddress={img2} />
      <Card userName="Shivani" post="Data Analyst" imgAddress={img1} />
      <Card userName="Ruchika" post="Web Developer" />
    </>
  );
}

export default App;
