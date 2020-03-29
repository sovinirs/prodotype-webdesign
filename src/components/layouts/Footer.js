import React from 'react';
import footerLogo from './images/footer-logo.png';

export const Footer = () => {
  return (
    <footer className='footer-section bg-vdark'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={footerLogo} alt='Footer Logo' />
          </div>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-2'>
                <a href='!#'>
                  <i className='fa fa-facebook text-white'></i>
                </a>
              </div>
              <div className='col-2'>
                <a href='!#'>
                  <i className='fa fa-twitter text-white'></i>
                </a>
              </div>
              <div className='col-2'>
                <a href='!#'>
                  <i className='fa fa-linkedin text-white'></i>
                </a>
              </div>
              <div className='col-2'>
                <a href='!#'>
                  <i className='fa fa-youtube text-white'></i>
                </a>
              </div>
              <div className='col-2'>
                <a href='!#'>
                  <i className='fa fa-pinterest text-white'></i>
                </a>
              </div>
              <div className='col-2'>
                <a href='!#'>
                  <i className='fa fa-instagram text-white'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
