import React from 'react';

export const Milestones = () => {
  return (
    <div className='container'>
      <div className='text-center'>
        <h2 className='heading section-title text-danger'>Our Milestones</h2>
      </div>
      <div className='row text-center milestone-row'>
        <div className='col-4'>
          <i className='fas fa-desktop'></i>
          <h1 className='milestone-timer'>70+</h1>
          <h2 className='milestone-heading'>Projects Completed</h2>
        </div>
        <div className='col-4'>
          <i className='fas fa-coffee text-danger'></i>
          <h1 className='milestone-timer text-danger'>649+</h1>
          <h2 className='milestone-heading text-danger'>Cups Of Coffee</h2>
        </div>
        <div className='col-4'>
          <i className='fas fa-users'></i>
          <h1 className='milestone-timer'>14+</h1>
          <h2 className='milestone-heading'>Clients</h2>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
