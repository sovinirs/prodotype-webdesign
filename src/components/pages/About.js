import React, { Fragment } from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import aboutImg from '../layouts/images/about.jpg';
import team1 from '../layouts/images/team-2.jpg';
import team2 from '../layouts/images/team-3.jpg';

export const About = () => {
  return (
    <Fragment>
      <div className='bg-vdark'>
        <Navbar />
        <div className='banner'>
          <img src={aboutImg} alt='Banner' />
        </div>
        <div className='container'>
          <div className='row about-inner'>
            <div className='col-md-6 col-12'>
              <p className='about-text py-5 text-justify'>
                Prodotype is an expert design house that aims to simplify and
                aestheticize lives through unique yet effective design. Our
                expert team comprising of former Autodesk Interns, best in class
                product designers, and an exclusive Pan India Team with tonnes
                of experience on the field work together towards revolutionizing
                the industry while changing lives through design.
                <br />
                <br /> Our simplistic design strategy coupled with a
                multi-dynamic approach gives us the creative edge in building
                products that will stand out from the crowd. From the corporate
                world to the casual, our goal is to give life and soul to
                everything, everyone has. As professionals, we actively work
                towards designing products that will stay one step ahead of the
                industry as we learn, grow and adapt to the exquisite tastes of
                our customers.
              </p>
            </div>
            <div className='col-md-6 col-12 text-center'>
              <iframe
                title='video'
                src='https://www.youtube.com/embed/toPNWkeYEYo'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              ></iframe>
            </div>
          </div>
        </div>
        <div className='desc container'>
          <div className='row about-inner-2'>
            <div className='col-2'></div>
            <div className='col-2 text-right'>
              <i className='icon far fa-file-alt'></i>
            </div>
            <div className='col-6'>
              <div className='text-white'>
                <h2 className='about-heading'>We are creative</h2>
                <h2 className='about-text'>
                  Prodotype essentializes works on products with a touch of
                  creativity to truly bring forth the uniqueness in every
                  design.
                </h2>
              </div>
            </div>
            <div className='col-2'></div>
          </div>
          <div className='row about-inner-2'>
            <div className='col-2'></div>
            <div className='col-2 text-right'>
              <i className='icon fas fa-pencil-alt'></i>
            </div>
            <div className='col-6'>
              <div className='text-white'>
                <h2 className='about-heading'>We Design To Innovate</h2>
                <h2 className='about-text'>
                  Through each product design, we build and create to innovate;
                  effectively and efficiently.
                </h2>
              </div>
            </div>
            <div className='col-2'></div>
          </div>
          <div className='row about-inner-2'>
            <div className='col-2'></div>
            <div className='col-2 text-right'>
              <i className='icon fas fa-list'></i>
            </div>
            <div className='col-6'>
              <div className='text-white'>
                <h2 className='about-heading'>We Personalize</h2>
                <h2 className='about-text'>
                  Our team of design experts hustle to make each design
                  completely original and a cut above the rest.
                </h2>
              </div>
            </div>
            <div className='col-2'></div>
          </div>
          <div className='row about-inner-2'>
            <div className='col-2'></div>
            <div className='col-2 text-right'>
              <i className='icon fas fa-lightbulb'></i>
            </div>
            <div className='col-6'>
              <div className='text-white'>
                <h2 className='about-heading'>We Design With Life</h2>
                <h2 className='about-text'>
                  All our designs not only have elegance and passion, but also
                  life that shines through elegant yet simplistic work method,
                  with user-centred personalization in mind.
                </h2>
              </div>
            </div>
            <div className='col-2'></div>
          </div>
        </div>
        <div className='team-desc container'>
          <div className='team-heading text-center'>OUR BOARD</div>
          <div className='team-text text-center'>
            Prodotype owes its existence to the consistent creative efforts of
            its founders who are constantly at the helm,
            <br /> working toward improvement and quality service.
          </div>
          <div className='row mt-3'>
            <div className='col-md-6 col-12 text-center my-1'>
              <img src={team1} alt='Jason' className='team' />
            </div>
            <div className='col-md-6 col-12 text-center my-1'>
              <img src={team2} alt='Karthick' className='team' />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default About;
