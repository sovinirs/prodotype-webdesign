import React, { Fragment } from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

export const Contact = () => {
  return (
    <Fragment>
      <div className='bg-black'>
        <Navbar />
        <div className='contact-container'>
          <div className='team-heading'>
            <h2 className='contact-heading text-center'>GET IN TOUCH</h2>
            <p className='team-text text-center'>
              Have a design idea you want to see come to life? Need assistance
              with any intimidating design problems?
              <br /> Our skilled staff are ready to address your queries any
              time, any where.
            </p>
          </div>
          <div className='row container contact-container-form'>
            <div className='col-md-6 col-12'>
              <form className='form'>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-md-6 col-12'>
                      <input
                        type='name'
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div className='col-md-6 col-12'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6 col-12'>
                      <input
                        type='name'
                        className='form-control'
                        placeholder='Subject'
                      />
                    </div>
                    <div className='col-md-6 col-12'>
                      <input
                        type='name'
                        className='form-control'
                        placeholder='Company Name'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6 col-12'>
                      <input
                        type='name'
                        className='form-control'
                        placeholder='Contact Number'
                      />
                    </div>
                    <div className='col-md-6 col-12'>
                      <select className='form-control'>
                        <option value='' disabled selected>
                          Enquiry Type
                        </option>
                        <option>Business Enquiry</option>
                        <option>Job Application</option>
                        <option>Query</option>
                        <option>Student Enquiry</option>
                      </select>
                    </div>
                  </div>
                  <textarea
                    className='form-control'
                    aria-label='With textarea'
                    placeholder='Message'
                  ></textarea>
                  <a href='!#' className='btn btn-sub btn-form btn-danger mt-4'>
                    Submit
                  </a>
                </div>
              </form>
            </div>
            <div className='col-md-6 col-12'></div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Contact;
