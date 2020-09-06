import React from 'react';
import ChartsEstadosItem from './ChartsEstadosItem';
import '../assets/styles/components/Charts.scss';

const ChartsEstados = () => (
  <div className='ChartsEstados'>
    <h3>Top Estados</h3>
    <div className='ChartsEstados__Card'>
      <h4>CDMX</h4>
      <ChartsEstadosItem />
    </div>
  </div>
);

export default ChartsEstados;
