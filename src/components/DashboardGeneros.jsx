import React, { useState, useEffect } from 'react';

import RadialChartM from './RadialChartM';
import RadialChartF from './RadialChartF';

import '../assets/styles/components/DashboardGeneros.scss';

const DashboardGeneros = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('http://covitmx.info:8000/api/EstadisticasPorEdad/')
      .then(response => response.json())
      .then(data => setInfo(data));
  }, []);

  const masculine = info.slice(0, 9);

  const female = info.slice(10, 19);

  return (
    <div className='DashboardGeneros'>
      <h3 className='DashboardGeneros__title'>Aumento de riesgo mortal por COVID por enfermedades crónicas</h3>
      <div className='DashboardGeneros__container'>
        <div className='DashboardGeneros__container-M'>
          <h4>Hombres</h4>
          <RadialChartM data={masculine} />
        </div>
        <div className='DashboardGeneros__container-F'>
          <h4>Mujeres</h4>
          <RadialChartF data={female} />
        </div>

      </div>
    </div>
  );
};

export default DashboardGeneros;
