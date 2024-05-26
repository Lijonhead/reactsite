

import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './NavBar.css'; 

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/cv" className="nav-link" activeClassName="active">CV</NavLink></li>
          <li><NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
