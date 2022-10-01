import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.scss';
import { MenuToggle } from './menuToggle';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggled = () => {
    setOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <nav>
      <NavLink to={'/'} className="header-navLink">
        Kupon
      </NavLink>
      <div className="header-btn">
        <motion.div whileHover={{ scale: 1.07 }}>
          <button
            className="header-btn__signUp"
            onClick={() => {
              navigate('/SignUp');
            }}
          >
            Sign Up
          </button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.07 }}>
          <button
            className="header-btn__signIn"
            onClick={() => {
              navigate('/SignIn');
            }}
          >
            Sign In
          </button>
        </motion.div>
        <div className="header-btn__toggle">
          <MenuToggle isOpen={isOpen} toggle={toggled} />
        </div>
      </div>
      {isOpen && (
        <section className="header__fullVH">
          <div className="header__fullVH_items">
            <div>
              <div className="header__links">
                <p>FAQS</p>
              </div>
              <div className="header__links">
                <p>Terms</p>
              </div>
              <div className="header__links">
                <p>Privacy</p>
              </div>
              <div className="header__links">
                <p>Contact Us</p>
              </div>
            </div>
          </div>
          <div className="header__links__button">
            <button
              className="header__links__button1"
              onClick={() => {
                navigate('/SignIn');
              }}
            >
              Sign in
            </button>
            <button
              className="header__links__button2"
              onClick={() => {
                navigate('/SignUp');
              }}
            >
              Create Account
            </button>
          </div>
        </section>
      )}
    </nav>
  );
};

export default Header;
