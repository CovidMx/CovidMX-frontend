import React, { useState, useEffect } from 'react';
import ChartsEstadosItem from './ChartsEstadosItem';
import '../assets/styles/components/ChartsEstadosCards.scss';

const ChartsEstados = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/')
      .then(response => response.json())
      .then(data => setInfo(data));
  }, []);

  console.log(info);

  return (
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
                <h3>Casos Activos</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartsEstados;
