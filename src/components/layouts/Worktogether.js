import React, { useState } from 'react';
import planning from './images/planning.png';

export const Worktogether = () => {
  const mission = (
    <div>
      <p className='work-sub-title'>
        Prodotype's mission is to solve any complexity through design-oriented
        solutions. We aim to aestheticize everything, everyone has in the most
        efficient and multi-dynamic way possible.With our elite team of Autodesk
        Interns, experienced designers and exclusive Pan Indian team,
        Prodotype’s mission will progressively and consistently be seen through
        to the end.
        <br />
        <br />
        We not only satisfy our clients’ design needs but also the world's and
        we do it in the most powerful way possible, by leaving a lasting impact.
      </p>
    </div>
  );

  const vision = (
    <div>
      <p className='work-sub-title'>
        Our vision is to make Prodotype the forerunner to revolutionise the
        design industry. We aim to bring simplistic design methods alongside
        aesthetically pleasing ideas with a touch of multi dynamic creativity to
        the industry’s lead.
        <br />
        <br />
        With constant innovation and learning, Prodotype will be a benchmark
        name that will not only inspire the best in creators and designers
        alike, but also provide holistic solutions to any design related
        problem. We will be a bridge that connects the student community to the
        industry of design.
      </p>
    </div>
  );

  const [selected, setSelected] = useState({
    vision: true,
    mission: false,
    visionClass: 'work-nav-item-active',
    missionClass: 'work-nav-item-inactive',
    displayText: vision
  });

  // onclick function
  const onVisionClick = e => {
    e.preventDefault();
    setSelected({
      vision: true,
      mission: false,
      visionClass: 'work-nav-item-active',
      missionClass: 'work-nav-item-inactive',
      displayText: vision
    });
  };

  const onMissionClick = e => {
    e.preventDefault();
    setSelected({
      vision: false,
      mission: true,
      visionClass: 'work-nav-item-inactive',
      missionClass: 'work-nav-item-active',
      displayText: mission
    });
  };

  return (
    <div className='container bg-vdark'>
      <div className='row'>
        <div className='col-md-6 col-sm-12 work text-center'>
          <img src={planning} alt='Prodotype' className='img-fluid' />
        </div>
        <div className='col-md-6 col-sm-12 work'>
          <h2 className='work-heading text-left'>
            We work together for solution
          </h2>
          <p className='work-sub-title'>
            In order to ensure success, workability and efficiency, all our
            methods from development to marketing, are done with total
            cooperation between the client and the teams.
          </p>
          <div>
            <ul className='nav work-nav'>
              <a
                href='!#'
                style={{ textDecoration: 'none' }}
                onClick={onVisionClick}
              >
                <li className={selected.visionClass}>Vision</li>
              </a>
              <a
                href='!#'
                style={{ textDecoration: 'none' }}
                onClick={onMissionClick}
              >
                <li className={selected.missionClass}>Mission</li>
              </a>
            </ul>
          </div>
          {selected.displayText}
        </div>
      </div>
    </div>
  );
};

export default Worktogether;
