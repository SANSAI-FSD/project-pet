import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'; 
import logo from '../assets/Logo.jpg';
import Home from "../pages/Home";
import PetList from "../pages/PetList.jsx";

function Navbar({setShowQR}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
      <Link to="/" className="navbar-brand d-flex align-items-center">
       <img src={logo} alt="LovePaws Logo" className="logo-circle" />
      </Link>


      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <button className="neon-pulse btn" onClick={() => setShowQR(true)}>Donate</button>
          <li className="nav-item">
            <NavLink to="/Dashboard" className="nav-link" end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/PetList" className="nav-link">
              Pet List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/care-tips" className="nav-link">
              Care Tips
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
