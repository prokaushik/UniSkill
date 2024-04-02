import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { Register } from "../../Register/Register";
import { Login } from "../../Login/Login";


const Header = () => {
  const [navList, setNavList] = useState(false);
  const [showLogin, setShowLogin] = useState(false); 
  const [showRegister, setShowRegister] = useState(false);

  // Function to show login form and hide registration form
  const showLoginForm = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  // Function to show registration form and hide login form
  const showRegisterForm = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex m-4'>
            <h4>
              <span>2</span> My List
            </h4>
            <div className="head-btn"> 
              <button className='btn btn-primary mr-2' onClick={showLoginForm}> {/* Set showLogin to true when clicked */}
                <i className='fa fa-sign-in'></i> Log In
              </button>
              <button className='btn btn-secondary' onClick={showRegisterForm}> {/* Set showRegister to true when clicked */} 
                <i className='fa fa-sign-out'></i> Sign Up
              </button>
            </div>
          </div>
          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </div>
        </div>
      </header>
      {showLogin && <Login setLoginUser={() => {}} />}
      {showRegister && <Register />} {/* Render Register component when showRegister is true */}
    </>
  );
};

export default Header;
