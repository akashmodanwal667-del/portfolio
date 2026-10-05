import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  function closeMenu() {
    setMenuOpen(false);
  }
  return (
    <header className="navber">
      <nav className="container navber-inner">
        <a href="#home" className="navar-logo" onClick={closeMenu}>
          Akash Modanwal
        </a>
        <button
          className="navbar-toggler"
          onClick={toggleMenu}
          aria-label="Open or close menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "X" : "☰"}
        </button>
        <ul className={menuOpen ? "navbar-links open" : "navbar-links"}>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#journey" onClick={closeMenu}>
              Journey
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;


