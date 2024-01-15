import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const reactEle = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};
function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
}
const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
const areactelement = React.createElement(
  "a",
  { href: "https://github.com/NAVNEET-KHARB", target: "_blank" },
  "Visit NAVNEET-KHARB on Github"
);
ReactDOM.createRoot(document.getElementById("root")).render(
  // AnotherElement
  // areactelement
  <>
  {/* <MyApp /> */}
  <App />
</>
);
