import React from 'react';
import client1 from './images/client-thumb-1.jpg';

export const Testimonials = () => {
  return (
    <div className='bg-vdark'>
      <div className='testimonials-container'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='heading section-title text-i-danger'>
              Testimonials
            </h2>
            <p className='test-sub-title text-center'>
              At Prodotype, we value our clients’ desires. In a collaborative
              effort, our skilled teams work together with our clients to
              provide the best possible product and design, suited to not only
              for customer satisfaction but for consumer satisfaction. Our staff
              are committed to helping and assisting our clients at all times
              and work actively to communicate with effective clarity. We see
              our clients as our working partners and make sure they’re engaged
              in seeing their concepts come to fruition.
            </p>
          </div>
          <div className='test-carousel-container mx-auto'>
            <p className='test-sub-title'>
              I am always impressed with their designs and the delivery of
              project in time speaks about their well developed appreciable
              quality they have imbibed with their strong beliefs. They
              implemented my dreams in the design and I feel worth for the money
              I have paid.
            </p>
            <div className='row client-info'>
              <div className='col-md-3 col-6 text-right'>
                <img
                  src={client1}
                  alt='Client'
                  className='client text-center'
                />
              </div>
              <div className='col-md-3 col-6 client-desc'>
                <h2 className='client-name'>Mr. Charles</h2>
                <h2 className='client-title'>CEO, Universal Electronics</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
