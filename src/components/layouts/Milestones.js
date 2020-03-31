import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';

export const Milestones = () => {
  const [countUp, setCountUp] = useState({
    didViewCountUp: false
  });

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setCountUp({ didViewCountUp: true });
    }
  };

  return (
    <div className='container bg-vdark'>
      <div className='text-center'>
        <h2 className='heading section-title'>Our Milestones</h2>
      </div>
      <div className='row text-center milestone-row text-i-danger'>
        <div className='col-4'>
          <i className='fas fa-desktop'></i>
          <h1 className='milestone-timer'>
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp
                start={0}
                end={countUp.didViewCountUp ? 84 : 0}
                suffix='+'
                duration={3}
              />
            </VisibilitySensor>
          </h1>
          <h2 className='milestone-heading'>Projects Completed</h2>
        </div>
        <div className='col-4'>
          <i className='fas fa-coffee'></i>
          <h1 className='milestone-timer'>
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp
                start={0}
                end={countUp.didViewCountUp ? 724 : 0}
                suffix='+'
                duration={3}
              />
            </VisibilitySensor>
          </h1>
          <h2 className='milestone-heading'>Cups Of Coffee</h2>
        </div>
        <div className='col-4'>
          <i className='fas fa-users'></i>
          <h1 className='milestone-timer'>
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp
                start={0}
                end={countUp.didViewCountUp ? 24 : 0}
                suffix='+'
                duration={3}
              />
            </VisibilitySensor>
          </h1>
          <h2 className='milestone-heading'>Clients</h2>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
