import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="mainlink">
          React Proj
        </Link>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
