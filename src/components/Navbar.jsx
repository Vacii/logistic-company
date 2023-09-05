import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header
      className="flex items-center justify-between h-16 w-full px-10vw text-secondaryColor"
      style={{ zIndex: 1000 }}
    >
      <a href="/" className="tracking-widest">
        RIVASPED
      </a>
      <nav ref={navRef} className="flex items-center" style={{ zIndex: 999 }}>
        <a href="/" className="mr-4" onClick={showNavbar}>
          Domů
        </a>
        <a href="/#about" className="mr-4" onClick={showNavbar}>
          O nás
        </a>
        <a href="/#cargo" className="mr-4" onClick={showNavbar}>
          Co převážíme
        </a>
        <a href="/#contact" className="mr-4" onClick={showNavbar}>
          Kontakt
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
