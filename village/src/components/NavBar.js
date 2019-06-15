import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = _ => (
  <nav className="bar">
    <NavLink to="/smurf-form">Add Smurf</NavLink>
    <NavLink exact to="/">Roster</NavLink>
  </nav>
);

export default NavBar;
