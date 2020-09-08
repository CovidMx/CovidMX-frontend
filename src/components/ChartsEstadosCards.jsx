import React from 'react';
import ChartsEstadosItem from './ChartsEstadosItem';
import '../assets/styles/components/ChartsEstadosCards.scss';

const ChartsEstados = () => (
  <>
    <h3 className='title'>Top Estados</h3>
    <div className='container'>
      <div className='ChartsEstados'>
        <div className='ChartsEstados__Card'>
          <ChartsEstadosItem />
          <div className='ChartsEstados__Card-face'>
            <h2 className='ChartsEstados__Card-face-city'>CDMX</h2>
            <div className='ChartsEstados__Card-face-cases'>
              <h2>500</h2>
              <h3>Nuevos Casos</h3>
            </div>
          </div>
        </div>
        <div className='ChartsEstados__Card'>
          <ChartsEstadosItem />
          <div className='ChartsEstados__Card-face'>
            <h2 className='ChartsEstados__Card-face-city'>CDMX</h2>
            <div className='ChartsEstados__Card-face-cases'>
              <h2>500</h2>
              <h3>Nuevos Casos</h3>
            </div>
          </div>
        </div>
        <div className='ChartsEstados__Card'>
          <ChartsEstadosItem />
          <div className='ChartsEstados__Card-face'>
            <h2 className='ChartsEstados__Card-face-city'>CDMX</h2>
            <div className='ChartsEstados__Card-face-cases'>
              <h2>500</h2>
              <h3>Nuevos Casos</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ChartsEstados;
