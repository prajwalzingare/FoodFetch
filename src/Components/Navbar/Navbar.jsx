import React from "react";
import dowmload1 from "../../Images/download1.png";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <a className="nav-link" href="#">
          <img className="logo-image" src={dowmload1} alt="" />
          <span className="logo-text">Food Fetch</span>
        </a>

        <ul className="menu-list">
          <li className="nav-item">
            <a href="">Home</a>
          </li>
          <li className="nav-item">
            <a href="">About</a>
          </li>
          <li className="nav-item">
            <a href="">service</a>
          </li>
          <li className="nav-item">
            <a href="">pricing</a>
          </li>
          <li className="nav-item">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
