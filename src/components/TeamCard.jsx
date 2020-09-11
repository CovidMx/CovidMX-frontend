import React from 'react';

import '../assets/styles/components/TeamCard.scss';

const TeamCard = ({ photo, name, job, twitter, link }) => {
  return (
    <div className='TeamCard'>
      <div className='TeamCard__img'>
        {
          photo ? <img src={photo} alt='profile' /> : undefined
        }
      </div>
      <div className='TeamCard__info'>
        <h2>{name}</h2>
        <h4>{job}</h4>
        <h5>
          Twitter:
          <a href={link}>
            @
            {twitter}
          </a>
        </h5>

      </div>
    </div>
  );
};

export default TeamCard;
