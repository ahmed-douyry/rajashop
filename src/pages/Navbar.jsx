// Navbar.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';
const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      // right:'8px',
      zIndex: 1000,
      // width: '100%',
      height: '80px',
      
      
      
    },
    links: {
      margin: '0 20px 0 20px',
      borderBottom:'none',
      textDecoration:'none'
    },
    iconsContainer: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      // marginRight: '20px',
    },
  };
  const Navbar = () => {
    return (
      <div style={styles.nav} autoFocus className='w-100 '>
        <nav className="navbar  navbar-light bg-light w-100 " >
          <div className="container-fluid">
            <img src={require('../images/logo.png')} alt="" />
  
            <Link  to='/' className='navbar-brand text-success'>
              <b>Accueil</b>
              <ul className="hover-options">
                <li><Link to="/" className='text-success text-decoration-none '>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                
              </ul>
            </Link>
  
           
            <Link style={styles.links} to='/tenues-de-match' className='navbar-brand text-success'>Tenues de match
            <div className="hover-options">
            <li><Link to="/" className='text-success text-decoration-none'>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                
              </div>
              
            
            </Link>
            <Link style={styles.links} to='/tenues-de-match' className='navbar-brand text-success'>Homme
            <div className="hover-options">
            <li><Link to="/" className='text-success text-decoration-none'>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                
              </div>
              
            
            </Link>
            <Link style={styles.links} to='/tenues-de-match' className='navbar-brand text-success'>femme
            <div className="hover-options">
            <li><Link to="/" className='text-success text-decoration-none'>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                
              </div>
              
            
            </Link>
            <Link style={styles.links} to='/tenues-de-match' className='navbar-brand text-success'>cadeux et accessoires
            <div className="hover-options">
            <li><Link to="/" className='text-success text-decoration-none'>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                
              </div>
              
            
            </Link>
            <Link style={styles.links} to='/tenues-de-match' className='navbar-brand text-success'>Entrainement
            <div className="hover-options">
            <li><Link to="/" className='text-success text-decoration-none'>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                <li><Link to="/option2" className='text-success text-decoration-none'>rca zeena</Link></li>
                
              </div>
              
            
            </Link>
            
            
            <div style={styles.iconsContainer}>
            <a href="" style={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-fill text-success" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
            </a>
            <a href="" style={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-fill text-success m-5" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
            </a>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
