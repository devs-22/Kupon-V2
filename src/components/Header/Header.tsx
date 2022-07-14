import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { MenuToggle } from './menuToggle';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggled = () => {
    setOpen(!isOpen);
  };
  return (
    <nav>
      <NavLink to={'/'} className="header-navLink">
        Kupon
      </NavLink>
      <div className="header-btn">
        <button className="header-btn__signUp">Sign Up</button>
        <button className="header-btn__signIn">Sign In</button>
        <div className="header-btn__toggle">
          <MenuToggle isOpen={isOpen} toggle={toggled} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
