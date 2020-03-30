import React from 'react';
import footerLogo from './images/footer-logo.png';

export const Footer = () => {
  return (
    <footer className='footer-section bg-black'>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <h3 className='footer-heading'>Follow Prodotype</h3>
            <ul className='nav-list footer-list'>
              <li className='nav-item footer-item'>Facebook</li>
              <li className='nav-item footer-item'>Instragram</li>
              <li className='nav-item footer-item'>Twitter</li>
              <li className='nav-item footer-item'>Linkedin</li>
            </ul>
          </div>
          <div className='col-3'>
            <h3 className='footer-heading'>Quick Links</h3>
            <ul className='nav-list footer-list'>
              <li className='nav-item footer-item'>Facebook</li>
              <li className='nav-item footer-item'>Instragram</li>
              <li className='nav-item footer-item'>Twitter</li>
              <li className='nav-item footer-item'>Linkedin</li>
            </ul>
          </div>
          <div className='col-3'>
            <h3 className='footer-heading'>Legal</h3>
            <ul className='nav-list footer-list'>
              <li className='nav-item footer-item'>Facebook</li>
              <li className='nav-item footer-item'>Instragram</li>
              <li className='nav-item footer-item'>Twitter</li>
              <li className='nav-item footer-item'>Linkedin</li>
            </ul>
          </div>
          <div className='col-3'>
            <h3 className='footer-heading'>Prodotype</h3>
            <ul className='nav-list footer-list'>
              <li className='nav-item footer-item'>Facebook</li>
              <li className='nav-item footer-item'>Instragram</li>
              <li className='nav-item footer-item'>Twitter</li>
              <li className='nav-item footer-item'>Linkedin</li>
            </ul>
          </div>
        </div>
        <div className='text-center footer-logo'>
          <h3 className='footer-list'>
            &copy; 2020 {'    '}
            <img
              src={footerLogo}
              alt='Logo'
              style={{ width: '7.5vw', height: '1.5vw' }}
            />
            {'      '}
            All rights reserved{'   '}
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
