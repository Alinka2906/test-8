import React from 'react';
import {NavLink} from "react-router-dom";

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