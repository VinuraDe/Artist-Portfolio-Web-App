// Navbar.js

import React from "react";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-brand">Artist Portfolio</h2>
        <ul className="nav-menu">
          <li className="nav-item"></li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#event"
              onClick={() => setActiveNav("#event")}
              className={activeNav === "#event" ? "active" : ""}
            >Events
            </a>
          </li>
          <li className="nav-item">
          <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
