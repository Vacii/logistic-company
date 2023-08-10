import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="flex items-center justify-between h-20 px-10vw text-secondaryColor">
      <h3 className="tracking-widest">RIVASPED</h3>
      <nav ref={navRef} className="flex items-center">
        <a href="/#" className="mr-4">
          Domu
        </a>
        <a href="/#" className="mr-4">
          O nás
        </a>
        <a href="/#" className="mr-4">
          Účetnictví
        </a>
        <a href="/#" className="mr-4">
          Kontakty
        </a>
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
