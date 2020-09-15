import React from 'react';
import ChartsEstadosItem from './ChartsEstadosItem';

import '../assets/styles/components/ChartsEstadosCards.scss';

const ChartsEstadosCards = ({ entidad, casosActivos }) => {
  return (
    <div className='ChartsEstadosCard'>
      <h2 className='ChartsEstadosCard__state'>{entidad}</h2>
      <div className='ChartsEstadosCard__cases'>
        <h2>{casosActivos}</h2>
        <h3>Casos Activos</h3>
      </div>
    </div>

  );
};

export default ChartsEstadosCards;
