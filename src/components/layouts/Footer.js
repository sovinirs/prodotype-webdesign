import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from './images/footer-logo.png';

export const Footer = () => {
  const onClick = e => {
    e.preventDefault();
  };

  return (
    <footer className='footer-section bg-black'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-6'>
            <h3 className='footer-heading'>Follow Prodotype</h3>
            <ul className='nav-list footer-list'>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fab fa-facebook fa-sm'></i>
                  <span>&nbsp;</span> Facebook
                </a>
              </li>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fab fa-instagram fa-sm'></i>
                  <span>&nbsp;</span> Instagram
                </a>
              </li>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fab fa-twitter fa-sm'></i>
                  <span>&nbsp;</span> Twitter
                </a>
              </li>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fab fa-linkedin fa-sm'></i>
                  <span>&nbsp;</span> Linkedin
                </a>
              </li>
            </ul>
            <h3 className='footer-heading'>World Wide Sites</h3>
            <ul className='nav-list footer-list'>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fa fa-globe fa-sm'></i>
                  <span>&nbsp;</span> Prodotype Europe
                </a>
              </li>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fa fa-globe fa-sm'></i>
                  <span>&nbsp;</span> Prodotype Serbia
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-3 col-6'>
            <h3 className='footer-heading'>Quick Links</h3>
            <ul className='nav-list footer-list'>
              <li className='nav-item footer-item'>
                <Link to='/'>
                  <i className='fa fa-home fa-sm'></i>
                  <span>&nbsp;</span> Home
                </Link>
              </li>
              <li className='nav-item footer-item'>
                <Link to='/about'>
                  <i className='fa fa-users fa-sm'></i>
                  <span>&nbsp;</span> About Us
                </Link>
              </li>
              <li className='nav-item footer-item'>
                <Link to='/services'>
                  <i className='fa fa-wrench fa-sm'></i>
                  <span>&nbsp;</span> Services
                </Link>
              </li>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fa fa-folder-open fa-sm'></i>
                  <span>&nbsp;</span> Portfolio
                </a>
              </li>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fa fa-edit fa-sm'></i>
                  <span>&nbsp;</span> Blog
                </a>
              </li>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fa fa-book fa-sm'></i>
                  <span>&nbsp;</span> Education
                </a>
              </li>
              <li className='nav-item footer-item'>
                <Link to='contact'>
                  <i className='fa fa-phone-alt fa-sm'></i>
                  <span>&nbsp;</span> Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-md-3 col-6'>
            <h3 className='footer-heading'>Legal</h3>
            <ul className='nav-list footer-list'>
              <li className='nav-item footer-item'>
                <Link to='terms'>
                  <i className='fa fa-gavel fa-sm'></i>
                  <span>&nbsp;</span> Terms & Conditions
                </Link>
              </li>
              <li className='nav-item footer-item'>
                <Link to='privacy'>
                  <i className='fa fa-user-secret fa-sm'></i>
                  <span>&nbsp;</span> Privacy Policy
                </Link>
              </li>
              <li className='nav-item footer-item'>
                <Link to='childrenprivacy'>
                  <i className='fa fa-child fa-sm'></i>
                  <span>&nbsp;</span> Children's Privacy Policy
                </Link>
              </li>
              <li className='nav-item footer-item'>
                <Link to='consent'>
                  <i className='fa fa-copyright fa-sm'></i>
                  <span>&nbsp;</span> Copyright
                </Link>
              </li>
              <li className='nav-item footer-item'>
                <Link to='termsofuse'>
                  <i className='fa fa-th-list fa-sm'></i>
                  <span>&nbsp;</span> Terms of Use
                </Link>
              </li>
              <li className='nav-item footer-item'>
                <Link to='participants'>
                  <i className='fa fa-archive fa-sm'></i>
                  <span>&nbsp;</span> Participants Guidelines
                </Link>
              </li>
              <li className='nav-item footer-item'>
                <Link to='/export'>
                  <i className='fa fa-exchange fa-sm'></i>
                  <span>&nbsp;</span> Export Compliance
                </Link>
              </li>
              <li className='nav-item footer-item'>
                <Link to='cookie'>
                  <i className='fa fa-file-alt fa-sm'></i>
                  <span>&nbsp;</span> Cookie Statement
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-md-3 col-6'>
            <h3 className='footer-heading'>Prodotype</h3>
            <ul className='nav-list footer-list'>
              <li className='nav-item footer-item'>
                Prodotype is a Leading Industrial Design house specialized in
                Industrial Product Design, Expert in Engineering Design &
                Product Development.
              </li>
            </ul>
            <h3 className='footer-heading'>Other Links</h3>
            <ul className='nav-list footer-list'>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fa fa-briefcase fa-sm'></i>
                  <span>&nbsp;</span> Careers
                </a>
              </li>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fa fa-coffee fa-sm'></i>
                  <span>&nbsp;</span> Investor Relation
                </a>
              </li>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fa fa-user-plus fa-sm'></i>
                  <span>&nbsp;</span> Become a Partner
                </a>
              </li>
              <li className='nav-item footer-item'>
                <a href='!#' onClick={onClick}>
                  <i className='fa fa-bug fa-sm'></i>
                  <span>&nbsp;</span> Report a Bug
                </a>
              </li>
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
