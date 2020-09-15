import React from 'react';
import Header from '../components/Header';
import TeamCard from '../components/TeamCard';

import '../assets/styles/App.scss';
import '../assets/styles/Team.scss';

import ed from '../assets/static/ed.jpg';
import cg from '../assets/static/cg.jpg';
import zm from '../assets/static/zm.jpg';
import pt from '../assets/static/pt.jpg';
import jp from '../assets/static/jp.jpg';
import od from '../assets/static/od.jpg';
import ol from '../assets/static/ol.jpg';
import d from '../assets/static/d.png';
import db from '../assets/static/db.jpg';
import jop from '../assets/static/j.jpg';

const Team = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='Team'>
          <div className='Team__coaches'>
            <h3 className='title'>Coaches</h3>
            <TeamCard photo={zm} name='Zally Meza' job='Master Coach' />
            <TeamCard photo={cg} name='Christian Guevara' job='Master Coach' />
            <TeamCard photo={pt} name='Pablo Trinidad' job='Mentor' />
          </div>
          <div className='Team__front'>
            <h3 className='title'>Frontend</h3>
            <TeamCard photo={ed} name='Eduardo Díaz' job='Frontend Developer' />
            <TeamCard photo={jp} name='Juan C Pablo' job='Frontend Developer' />
          </div>
          <div className='Team__back'>
            <h3 className='title'>Backend</h3>
            <TeamCard photo={jop} name='Jorge Perez' job='Backend Developer' />
            <TeamCard photo={ol} name='Omar López' job='Backend Developer' />
            <TeamCard photo={d} name='Ricardo Aragón' job='Backend Developer' link='twitter.com' />
            <TeamCard photo={db} name='Oscar Guzmán' job='Backend Developer' link='twitter.com' />
          </div>
          <div className='Team__data'>
            <h3 className='title'>Data Science</h3>
            <TeamCard name='Luis Martínez' job='Data Scientist' />
            <TeamCard photo={od} name='David Bocarejo' job='Data Base' twitter='jcp' link='twitter.com' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
