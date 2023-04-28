import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./logo.png";
import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const location = useLocation();
  const notRoot = () => {
    return location.pathname !== '/';
  };
  return (
    <nav className="navigation">
      <a href="#home" className="brand-name">
        {" "}
        <img src={Logo} alt="cocktail-logo" className="Logo" />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 35"
          fill="black"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link notRoot={notRoot()} to='/' >Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
