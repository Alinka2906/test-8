import React from 'react';
import NavBar from "../NavBar/NavBar";
import './Header.css';

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-logo">
            <p>Quotes</p>
          </div>
          <NavBar/>
        </div>
      </header>
    </>
  );
};

export default Header;