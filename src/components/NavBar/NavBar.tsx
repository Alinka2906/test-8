import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <div className="nav-block">
        <ul className="nav-links">
          <li><NavLink to="/">Quotes</NavLink></li>
          <li><NavLink  to="/submit-quote">Submit new quote</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;