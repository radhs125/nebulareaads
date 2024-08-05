import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming you have a CSS file for styling
import logo from '../assets/logo.png';

const NavBar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="NebulaReads Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/browse"><b>Browse</b></Link></li>
        <li><Link to="/Membership"><b>Membership</b></Link></li>
        <li><Link to="/recommendations"><b>Recommendations</b></Link></li>
        <li><Link to="/mybooks"><b>My Books</b></Link></li>
        {isAuthenticated ? (
          <li><Link to="/login" onClick={handleLogout}><b>Logout</b></Link></li>
        ) : (
          <li><Link to="/login"><b>Register/Login</b></Link></li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
