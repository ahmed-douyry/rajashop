// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const styles ={
  nav:{
    display: 'flex',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      
  }
}
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light j" style={styles.nav}>
      <div className="container-fluid">
        <Link to='/' className='navbar-brand text-success'>
          <img src={require('../images/logo.png')} alt="" className="navbar-logo" />
          
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
          <Link to='/' className='navbar-brand text-success'>
          <b>Acceuil</b>
        </Link>
        </li>
          <Link to='/' className='navbar-brand text-success'>
          <b>Male</b>
        </Link>
        <Link to='/' className='navbar-brand text-success'>
          <b>Femme</b>
        </Link>
        <Link to='/' className='navbar-brand text-success'>
          <b>Cadeaux et accessoires</b>
        </Link>
        <Link to='/' className='navbar-brand text-success'>
          <b>Tenu de match</b>
        </Link>
        <Link to='/' className='navbar-brand text-success'>
          <b>casquette</b>
        </Link>
        <Link to='/' className='navbar-brand text-success'>
          <b>Lunettes</b>
        </Link>
          </ul>
        </div>

        <div className="iconsContainer d-none d-lg-flex">
          
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-fill text-success mr-5 ml-5" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
          </a>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-fill text-success" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
