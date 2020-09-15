import React, { PureComponent, useEffect, useState } from 'react'
import SingleChartPie from './SingleChartPie'
import '../assets/styles/components/Hero.scss'
import states from '../states.json';


const ChartPie = () => {

  function findStateById(id) {
    for (let i = 0; i < states.length; i++) {
      if (id === states[i].entidad_id) {
        return states[i];
      }
    }
  }


  const [apiData, setInfo] = useState([]);
  
  useEffect(()=>{
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
    .then(data => setInfo(data))
  },[]);

  return (
    <>
    <div className="ChartPie__container">
      
        <div className="ChartPie__grid">

          {
            apiData.map(item => {
            
              // <SingleChartPie {...item} />
              return <SingleChartPie key={item.entidad_id} {... item} />
            })
      
          }
        </div>
      

    </div>
    
        </>
  );
}

export default ChartPie;