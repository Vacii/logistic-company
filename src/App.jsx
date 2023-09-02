import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
