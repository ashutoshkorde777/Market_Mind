import React from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { IoNotifications } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import './navbar.css'; // Import Navbar CSS

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            
          </li>
          <li className="navbar-item">
           
          </li>
          {/* Add more links as needed */}
        </ul>
        <div className="navbar-icons">
          <TextField id="outlined-search" label="Search field" type="search" size="small" />
          <IoNotifications className="navbar-icon" />
          <CgProfile className="navbar-icon" />
        </div>
      </div>
    </nav>
  );
}