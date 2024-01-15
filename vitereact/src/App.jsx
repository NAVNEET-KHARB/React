import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const userName = "Navneet";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Normal Vite+React App {2+2}</h1>
      <h1>Normal Vite+React App {userName} </h1>
      <h1>Normal Vite+React App {userName==='Navneet'?"Yes":"No"} </h1>
    </>
  )
}

export default App
