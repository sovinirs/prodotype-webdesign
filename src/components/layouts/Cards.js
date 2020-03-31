import React from 'react';

export const Cards = () => {
  const onClick = e => {
    e.preventDefault();
  };

  return (
    <div className='container bg-vdark'>
      <div className='cards'>
        <div className='row'>
          <div className='col-sm-6 col-md-3 col-6 d-flex align-items-stretch'>
            <div className='card card-body-danger text-center'>
              <a
                href='!#'
                onClick={onClick}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <div className='card-body'>
                  <h5 className='card-title'>Who We Are?</h5>
                  <p className='card-text'>
                    Prodotype intensely work on creating and delivering the best
                    designs through our unique multi-dynamic work approach.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 col-6 d-flex align-items-stretch'>
            <div className='card card-body-dark text-center'>
              <a
                href='!#'
                onClick={onClick}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <div className='card-body'>
                  <h5 className='card-title'>What We Do?</h5>
                  <p className='card-text'>
                    Prodotype solves complex problems that seem impossible
                    through simple design changes and add a dash of elegance to
                    our work.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 col-6 d-flex align-items-stretch'>
            <div className='card card-body-danger text-center'>
              <a
                href='!#'
                onClick={onClick}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <div className='card-body'>
                  <h5 className='card-title'>View Works</h5>
                  <p className='card-text'>
                    In order to assure our quality, take a look at our projects
                    for yourself. We have a collection of unique and
                    aesthetically pleasing designs.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 col-6 d-flex align-items-stretch'>
            <div className='card card-body-dark text-center'>
              <a
                href='!#'
                onClick={onClick}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <div className='card-body'>
                  <h5 className='card-title'>Get in Touch</h5>
                  <p className='card-text'>
                    Have a design idea you want to see come to life? Need
                    assistance with any intimidating design problems? Contact us
                    now.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
