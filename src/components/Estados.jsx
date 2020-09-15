import React, { useState, useEffect } from 'react';
import ChartsEstadosCards from './ChartsEstadosCards';
import { Link } from 'react-router-dom'

import '../assets/styles/components/Estados.scss';
import states from '../states.json';

const Estados = () => {
  // const data = useInitialState(API);

  // data.forEach(item => console.log(item.casos_activos))

  // data.map((item) => console.log(item.casos_activos));

  // console.log(data.forEach(item => console.log(item)));

  // [
  //   {
  //       "entidad_id": 1,
  //       "clave_entidad": 1,
  //       "entidad_federativa": "AGUASCALIENTES",
  //       "abreviatura": "AS",
  //       "poblacion": 944285
  //   },
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
      .then((response) => response.json())
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
      .then((data) => setInfo(data));
  }, []);

  // console.log(info);

  return (
    <>
      <h3 className='title'>Casos activos por estados</h3>
      <div className='Estados'>
        {info.map((item) =>
          <ChartsEstadosCards key={item.entidad_id} casosActivos={item.casos_activos} entidad={item.entidad_federativa} />
        )}
      </div>
      <div className="Estados__link">
        <button className="Button__link">
          <Link to='/estados'>
            Ver más
          </Link>

        </button>

      </div>
    </>
    // <ChartsEstadosCards casosActivos={data[0].casos_activos} />
  );
};

export default Estados;
