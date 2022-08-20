import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="main">
        <div className="logo">veVaaR</div>

        <ul className="items">
          <li className="item">Home</li>
          <li className="item">About US</li>
          <li className="item">Training</li>
          <li className="item">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
