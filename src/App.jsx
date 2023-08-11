import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import ContactForm from "./components/ConstactForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Main />
      <ContactForm />
    </>
  );
}

export default App;
