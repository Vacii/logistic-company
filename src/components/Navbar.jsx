import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 className="tracking-widest">RIVASPED</h3>
      <nav ref={navRef}>
        <a href="/#">Domu</a>
        <a href="/#">O nás</a>
        <a href="/#">Účetnictví</a>
        <a href="/#">Kontakty</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;