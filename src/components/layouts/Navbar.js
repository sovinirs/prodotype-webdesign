import React from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const onClick = e => {
    e.preventDefault();
  };

  return (
    <nav className='navbar fixed-top navbar-expand-lg'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <img src={logo} alt='Prodotype' className='nav-img' />
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i className='fas fa-bars text-white' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-list nav-item navbar-inline'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <Link to='/about'>About</Link>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <a href='!#' onClick={onClick}>
                Blog
              </a>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <a href='!#' onClick={onClick}>
                Education
              </a>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <Link to='/services'>Services</Link>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <a href='!#' onClick={onClick}>
                Portfolio
              </a>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <Link to='contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
