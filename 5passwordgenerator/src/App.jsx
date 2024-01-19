import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [sp_CharAllowed, setSp_CharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passref = useRef(null);
  const generatePassword = useCallback(() => {
    let passw = "";
    let passtr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      passtr += "0123456789";
    }
    if (sp_CharAllowed) {
      passtr += "!@#$%^&*()|/.,+=-_:;";
    }
    for (let i = 0; i < length; i++) {
      const ind = Math.floor(Math.random() * passtr.length);
      passw += passtr.charAt(ind);
    }
    setPassword(passw);
  }, [length, numAllowed, sp_CharAllowed]);
  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, sp_CharAllowed]);
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passref.current.select();
  };
  return (
    <div className="w-full max-w-md mx-auto shadow-md-rounded-lg px-4 py-3 my-8 bg-blue-950 text-yellow-600">
      <h1 className="text-center text-white my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passref}
        />
        <button
          className="outline-none bg-green-500 text-white py-0.5 px-3 shrink-0"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={4}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={sp_CharAllowed}
            onChange={() => {
              setSp_CharAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
