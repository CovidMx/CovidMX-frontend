import React, { useState, useEffect } from 'react';

import MuertesHombres from './MuertesHombres';
import MuertesMujeres from './MuertesMujeres';

import '../assets/styles/components/DashboardGenerosMuertes.scss';

const DashboardGenerosMuertes = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('http://covitmx.info:8000/api/EstadisticasPorEdad/')
      .then(response => response.json())
      .then(data => setInfo(data));
  }, []);

  const masculine = info.slice(0, 9);

  const female = info.slice(10, 19);

  console.log(masculine);
  console.log(female);

  return (
    <>
      <div className='DashboardMuertes'>
        <h2 className='DashboardMuertes__title'>Muertes por sexo</h2>
        <div className='DashboardMuertes__container'>
          <div>
            <h3 className='DashboardMuertes__container-title'>Hombres</h3>
            <MuertesHombres data={masculine} />
          </div>
          <div>
            <h3 className='DashboardMuertes__container-title'>Mujeres</h3>
            <MuertesMujeres data={female} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardGenerosMuertes;
