import React from 'react';
import logo from './images/logo.png';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
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
              <a href='!#'>Home</a>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <a href='!#'>About</a>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <a href='!#'>Blog</a>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <a href='!#'>Education</a>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <a href='!#'>Services</a>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <a href='!#'>Portfolio</a>
            </li>
            <li className='nav-list nav-item navbar-inline'>
              <a href='!#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
