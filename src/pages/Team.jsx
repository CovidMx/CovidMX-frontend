import React from 'react';
import Header from '../components/Header';
import TeamCard from '../components/TeamCard';

import '../assets/styles/App.scss';
import '../assets/styles/Team.scss';

import ed from '../assets/static/ed.jpg';

const Team = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='Team'>
          <div className='Team__coaches'>
            <h3 className='title'>Coaches</h3>
            <TeamCard name='Zally Meza' job='Master Coach' twitter='zallyGH' link='twitter.com' />
            <TeamCard name='Christian Guevara' job='Master Coach' twitter='chdev' link='twitter.com' />
            <TeamCard name='Pablo Trinidad' job='Mentor' twitter='pt' link='twitter.com' />
          </div>
          <div className='Team__front'>
            <h3 className='title'>Frontend</h3>
            <TeamCard photo={ed} name='Eduardo Díaz' job='Frontend Developer' twitter='eddiaz' link='twitter.com' />
            <TeamCard name='Juan C Pablo' job='Frontend Developer' twitter='jcp' link='twitter.com' />
          </div>
          <div className='Team__back'>
            <h3 className='title'>Backend</h3>
            <TeamCard name='Jorge' job='Backend Developer' twitter='jcp' link='twitter.com' />
            <TeamCard name='Omar López' job='Backend Developer' twitter='zoomars' link='twitter.com' />
          </div>
          <div className='Team__data'>
            <h3 className='title'>Data Science</h3>
            <TeamCard name='Manuel' job='Data Scientist' twitter='jcp' link='twitter.com' />
          </div>
        </div>

      </div>

    </>
  );
};

export default Team;
