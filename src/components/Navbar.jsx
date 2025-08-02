

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'; 
import logo from '../assets/Logo.jpg';

function Navbar({ setShowQR, setShowAddPet }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    try {
      const userString = localStorage.getItem("user");
      if (userString) {
        const userData = JSON.parse(userString);
        if (userData.username && userData.username.endsWith("@admin")) {
          setIsAdmin(true);
        }
      }
    } catch (err) {
      console.error("Error reading user from localStorage:", err);
    }
  }, []);

  return (
    <nav className="navbar">
      <img src={logo} alt="LovePaws Logo" className="logo-circle" />

      <div className="d-flex align-items-center">
        <button className="btn" onClick={() => setShowQR(true)}>Donate</button>
        <button className="btn" onClick={() => setShowAddPet(true)}>Add Pet</button>
      </div>

      <ul className="navbar-nav">
        <li><NavLink to="/Dashboard" className="nav-link">HOME</NavLink></li>
        <li><NavLink to="/PetList" className="nav-link">PET LIST</NavLink></li>
        <li><NavLink to="/care-tips" className="nav-link">CARE TIPS</NavLink></li>
        {isAdmin && (
          <li><NavLink to="/admin" className="nav-link admin-link">ADMIN PANEL</NavLink></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
