import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={closeMenu} aria-label="Home">
          {"<Kanakarn />"}
        </a>

        {/* Desktop / Mobile Menu */}
        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              Profile
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Toolkit
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Work
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        {/* Menu Button */}
        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
