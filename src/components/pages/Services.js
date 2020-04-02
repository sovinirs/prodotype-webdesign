import React, { Fragment } from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import carDesign from '../layouts/images/hyundai.jpg';

export const Services = () => {
  return (
    <Fragment>
      <div className='bg-black'>
        <Navbar />
        <div className='container services-main-heading'>
          <div>
            <h2 className='services-heading text-center'>Services We Offer</h2>
          </div>
        </div>
        <div className='container bg-vdark'>
          <h2 className='services-desc-heading text-center mt-5'>
            DESIGN SOLUTIONS
          </h2>
          <p className='services-desc-text text-center'>
            Immerse yourself in Prodotype’s vast services and find the one you
            might require.
            <br />
            With over 10+ service areas and skills, our toolbox of services will
            be sure to satisfy any of your queries.
          </p>
          <div className='container'>
            <div className='row service-row-margin'>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-pencil'></i>
                  <span>&nbsp;&nbsp;</span>2D And 3D Sketching
                </h2>
                <p className='services-desc-text'>
                  The cornerstone of every product idea is brought to life
                  through our best in industry team and top-of-line Computer
                  Aided Design Software in 2D or 3D.
                </p>
              </div>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-cogs'></i>
                  <span>&nbsp;&nbsp;</span>Industrial Machinery Design
                </h2>
                <p className='services-desc-text'>
                  Prodotype’s Industrial Machinery Design team works to design
                  only Industrial standard machinery.
                </p>
              </div>
            </div>
            <div className='row service-row-margin'>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-car'></i>
                  <span>&nbsp;&nbsp;</span>Vehicular Design
                </h2>
                <p className='services-desc-text'>
                  Nothing flies past our Vehicular Design experts who provide
                  ergonomic and innovative designs for all automobile needs.
                </p>
              </div>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-tablet'></i>
                  <span>&nbsp;&nbsp;</span>Furniture Design
                </h2>
                <p className='services-desc-text'>
                  From chairs and tables for homes to shelves and desks for
                  offices, our skilled team provides elegance.
                </p>
              </div>
            </div>
            <div className='row service-row-margin mb-5'>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-connectdevelop'></i>
                  <span>&nbsp;&nbsp;</span>General Product Design
                </h2>
                <p className='services-desc-text'>
                  Through expertise in the analysis-concept-synthesis method,
                  Prodotype aims to bring our customers’ product ideas into
                  successful and working design.
                </p>
              </div>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-archive'></i>
                  <span>&nbsp;&nbsp;</span>Packaging Design
                </h2>
                <p className='services-desc-text'>
                  Our packaging designers create packages that drive products to
                  success through communicative and creative leverage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='service-car-image'>
          <img src={carDesign} alt='Car Design' />
        </div>
        <div className='container bg-vdark'>
          <h2 className='services-desc-heading text-center mt-5'>
            EVERYTHING IS POSSIBLE
          </h2>
          <div className='container'>
            <div className='row service-row-margin mt-4'>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-plus'></i>
                  <span>&nbsp;&nbsp;</span>Medical Equipment Design
                </h2>
                <p className='services-desc-text'>
                  Through skilled and careful industry design experts, Prodotype
                  aims to bring doctors and medical professionals to a beautiful
                  and efficient world through medical equipment design services.
                </p>
              </div>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-music'></i>
                  <span>&nbsp;&nbsp;</span>Musical Instrument and Equipment
                  Design
                </h2>
                <p className='services-desc-text'>
                  Prodotype incorporates peak creativity through the music field
                  with rich creativity from the industry of design to bring
                  forth amazing melody through beautiful, custom-made
                  instruments.
                </p>
              </div>
            </div>
            <div className='row service-row-margin'>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-graduation-cap'></i>
                  <span>&nbsp;&nbsp;</span>Engineering Design
                </h2>
                <p className='services-desc-text'>
                  Our Engineering Design services simplify complexities by
                  manipulating and streamlining designs of complex-looking
                  systems.
                </p>
              </div>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-adjust'></i>
                  <span>&nbsp;&nbsp;</span>Conceptual Design
                </h2>
                <p className='services-desc-text'>
                  Through exquisitely enriching yet divinely simplistic
                  concepts, Prodotype provides digital mock ups to show the
                  world our clients’ mastermind products.
                </p>
              </div>
            </div>
            <div className='row service-row-margin mb-5'>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-pencil'></i>
                  <span>&nbsp;&nbsp;</span>Product Developmental Services
                </h2>
                <p className='services-desc-text'>
                  Our Product Development team actively enriches and improves
                  existing product ideas to assure customer and consumer
                  satisfaction.
                </p>
              </div>
              <div className='col-md-6 col-12'>
                <h2 className='service-item'>
                  <i className='fa fa-lightbulb-o'></i>
                  <span>&nbsp;&nbsp;</span>Design Thinking Services
                </h2>
                <p className='services-desc-text'>
                  Through the expertise and skilled mastery of design in several
                  fields over numerous applications, Prodotype solves customers’
                  any and all design problems through our simplistic yet
                  multi-dynamic approach.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Services;
