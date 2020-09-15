import React, { useState, useEffect } from 'react';

import ChartBar from './ChartBar';

import states from '../states.json';

import '../assets/styles/components/DashboardMexico.scss';

const DashboardMexico = () => {
  function findStateById(id) {
    for (let i = 0; i < states.length; i++) {
      if (id === states[i].entidad_id) {
        return states[i];
      }
    }
  }

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('http://covitmx.info:8000/api/CasosPorEstado/')
      .then(response => response.json())
      .then((perState) => {
        for (let i = 0; i < perState.length; i++) {
          const estadoEncontrado = findStateById(perState[i].entidad_id);
          if (estadoEncontrado) {
            perState[i].entidad_federativa = estadoEncontrado.entidad_federativa;
          }
          // perState[i].entidad_federativa = findStateById(perState[i].entidad_id)?.entidad_federativa;
          // console.log(`perState[i].entidad_id ${perState[i].entidad_id} - perState[i].entidad_federativa ${perState[i].entidad_federativa}`);
        }
        return perState;
      })
      .then(data => setInfo(data));

  }, []);

  return (
    <div className='Dashboard'>
      <h2 className='title'>Casos activos, recuperados y muertes en México</h2>
      <ChartBar data={info} />
    </div>

  );
};

export default DashboardMexico;
